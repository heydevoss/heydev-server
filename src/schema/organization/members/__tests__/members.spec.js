import { createTestClient } from 'apollo-server-testing';
import * as queries from './api';
import expectedResultMembers from './expectedResults';
import testServer from '../../../../e2eHelpers/serverFactory';
import getPropsFromList from '../../../../e2eHelpers/dataExtractor';

describe('Member type tests', () => {
  const maxNumberOfMembers = 10;
  const membersPath = ['organization', 'members'];
  const { query } = createTestClient(testServer);

  it('members: OrganizationMember', async () => {
    const { data } = await query({
      query: queries.members,
      variables: { maxNumberOfMembers },
    });
    expect(data).toEqual(expectedResultMembers);
  });

  it('members: { name }: OrganizationMember', async () => {
    const { data } = await query({
      query: queries.membersName,
      variables: { maxNumberOfMembers },
    });

    const expectedResultMembersName = getPropsFromList(
      expectedResultMembers,
      membersPath,
      ['name']
    );
    expect(data).toEqual(expectedResultMembersName);
  });

  it('members: { id, login }: OrganizationMember', async () => {
    const { data } = await query({
      query: queries.membersIdLogin,
      variables: { maxNumberOfMembers },
    });

    const expectedResultMembersIdLogin = getPropsFromList(
      expectedResultMembers,
      membersPath,
      ['id', 'login']
    );
    expect(data).toEqual(expectedResultMembersIdLogin);
  });

  it('members: { login, role, url }: OrganizationMember', async () => {
    const { data } = await query({
      query: queries.membersLoginRoleUrl,
      variables: { maxNumberOfMembers },
    });

    const expectedResultMembersLoginRoleUrl = getPropsFromList(
      expectedResultMembers,
      membersPath,
      ['login', 'role', 'url']
    );
    expect(data).toEqual(expectedResultMembersLoginRoleUrl);
  });

  it('members: { login, name, role, url }: OrganizationMember', async () => {
    const { data } = await query({
      query: queries.membersNameLoginRoleUrl,
      variables: { maxNumberOfMembers },
    });

    const expectedResultMembersNameLoginRoleUrl = getPropsFromList(
      expectedResultMembers,
      membersPath,
      ['name', 'login', 'role', 'url']
    );
    expect(data).toEqual(expectedResultMembersNameLoginRoleUrl);
  });
});
