import { createTestClient } from 'apollo-server-testing';
import * as queries from './api';
import * as expectedResult from './expectedResults';
import testServer from '../../../../testUtils/integration/serverFactory';
import { getPropFromList } from '../../../../testUtils/integration/dataExtractor';

describe('Member type tests', () => {
  const login = 'panelinhadees';
  const maxNumberOfMembers = 10;
  const { query } = createTestClient(testServer);

  it('members: OrganizationMember', async () => {
    const { data } = await query({
      query: queries.members,
      variables: { login, maxNumberOfMembers },
    });
    expect(data).toEqual(expectedResult.members);
  });

  it('members: { name }: OrganizationMember', async () => {
    const { data } = await query({
      query: queries.membersName,
      variables: { login, maxNumberOfMembers },
    });
    const expectedResultMembersName = getPropFromList(expectedResult.members, ['organization', 'members'], ['name'])
    expect(data).toEqual(expectedResultMembersName);
  });

  it('members: { id, login }: OrganizationMember', async () => {
    const { data } = await query({
      query: queries.membersIdLogin,
      variables: { login, maxNumberOfMembers },
    });
    const expectedResultMembersIdLogin = getPropFromList(expectedResult.members, ['organization', 'members'], ['id', 'login'])
    expect(data).toEqual(expectedResultMembersIdLogin);
  });

  it('members: { login, role, url }: OrganizationMember', async () => {
    const { data } = await query({
      query: queries.membersLoginRoleUrl,
      variables: { login, maxNumberOfMembers },
    });
    const expectedResultMembersLoginRoleUrl = getPropFromList(expectedResult.members, ['organization', 'members'], ['login', 'role', 'url'])
    expect(data).toEqual(expectedResultMembersLoginRoleUrl);
  });

  it('members: { name, login, role, url }: OrganizationMember', async () => {
    const { data } = await query({
      query: queries.membersNameLoginRoleUrl,
      variables: { login, maxNumberOfMembers },
    });
    const expectedResultMembersNameLoginRoleUrl = getPropFromList(expectedResult.members, ['organization', 'members'], ['name', 'login', 'role', 'url'])
    expect(data).toEqual(expectedResultMembersNameLoginRoleUrl);
  });
});