import * as chai from 'chai';
import { dotnetCoreStack as hardCodedDotnetCoreStack } from './../../../../stacks/functionapp/2020-05-01/stacks/dotnetCore';
import { nodeStack as hardCodedNodeStack } from './../../../../stacks/functionapp/2020-05-01/stacks/node';
import { pythonStack as hardCodedPythonStack } from './../../../../stacks/functionapp/2020-05-01/stacks/python';
import { javaStack as hardCodedJavaStack } from './../../../../stacks/functionapp/2020-05-01/stacks/java';
import { powershellStack as hardCodedPowershellStack } from './../../../../stacks/functionapp/2020-05-01/stacks/powershell';

const expect = chai.expect;

export function validateAllStackLength(stacks) {
  expect(stacks).to.be.an('array');
  expect(stacks.length).to.equal(5);
}

export function validateDotnetCoreStack(stacks) {
  validateAllStackLength(stacks);
  const dotnetCoreStack = stacks[0];
  expect(dotnetCoreStack.displayText).to.equal('.NET Core');
  expect(dotnetCoreStack.value).to.equal('dotnet');
  expect(dotnetCoreStack.sortOrder).to.equal(0);
  expect(dotnetCoreStack.versions.length).to.equal(1);
  expect(dotnetCoreStack).to.deep.equal(hardCodedDotnetCoreStack);
}

export function validateNodeStack(stacks) {
  validateAllStackLength(stacks);
  const nodeStack = stacks[1];
  expect(nodeStack.displayText).to.equal('Node.js');
  expect(nodeStack.value).to.equal('node');
  expect(nodeStack.sortOrder).to.equal(1);
  expect(nodeStack.versions.length).to.equal(2);
  expect(nodeStack).to.deep.equal(hardCodedNodeStack);
}

export function validatePythonStack(stacks) {
  validateAllStackLength(stacks);
  const pythonStack = stacks[2];
  expect(pythonStack.displayText).to.equal('Python');
  expect(pythonStack.value).to.equal('python');
  expect(pythonStack.sortOrder).to.equal(2);
  expect(pythonStack.versions.length).to.equal(3);
  expect(pythonStack).to.deep.equal(hardCodedPythonStack);
}

export function validateJavaStack(stacks) {
  validateAllStackLength(stacks);
  const javaStack = stacks[3];
  expect(javaStack.displayText).to.equal('Java');
  expect(javaStack.value).to.equal('java');
  expect(javaStack.sortOrder).to.equal(3);
  expect(javaStack.versions.length).to.equal(2);
  expect(javaStack).to.deep.equal(hardCodedJavaStack);
}

export function validatePowershellCoreStack(stacks) {
  validateAllStackLength(stacks);
  const powershellStack = stacks[4];
  expect(powershellStack.displayText).to.equal('PowerShell Core');
  expect(powershellStack.value).to.equal('powershell');
  expect(powershellStack.sortOrder).to.equal(4);
  expect(powershellStack.versions.length).to.equal(2);
  expect(powershellStack).to.deep.equal(hardCodedPowershellStack);
}