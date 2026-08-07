---
name: I_CONTRACCTPRTNCORRESPNCTP
description: Contracctprtncorrespnctp
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - transactional-processing
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CONTRACCTPRTNCORRESPNCTP

**Contracctprtncorrespnctp**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ContractAccount` | ✓ | |  |  |
| `BusinessPartner` | ✓ | |  |  |
| `ContrAcctPrtnCorrespncUUID` | ✓ | |  |  |
| `AddrIDOfCorrespncRcpnt` |  | |  |  |
| `CorrespncRcpntAddrIsSpecified` |  | |  |  |
| `CACorrespondenceType` |  | |  |  |
| `CorrespondenceRole` |  | |  |  |
| `CorrespondenceRecipient` |  | |  |  |
| `CAOriglPartIsNotRcvgCorrespnc` |  | |  |  |
| `_BusinessPartner` | | ✓ | | |
| `_CACorrespondenceType` | | ✓ | | |
| `_ContractAccount` | | ✓ | | |
| `_ContractAccountPartner` | | ✓ | | |
| `_CorrespncRole` | | ✓ | | |
| `_CorrespondenceRecipient` | | ✓ | | |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData: { blocking: #REQUIRED,
                                  blockingIndicator: ['_BusinessPartner.IsBusinessPurposeCompleted'] } }

@EndUserText.label: 'Contr Acct Partner Correspondence - TP'

@ObjectModel: { modelingPattern: #TRANSACTIONAL_INTERFACE,
                representativeKey: 'ContrAcctPrtnCorrespncUUID',
                sapObjectNodeType.name: 'ContrAcctPartnerCorrespondence',
                supportedCapabilities:  [#TRANSACTIONAL_PROVIDER],
                usageType: { dataClass: #MASTER,
                             serviceQuality: #C,
                             sizeCategory: #L } }

@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #TRANSACTIONAL }
@Metadata.ignorePropagatedAnnotations: true

@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'VKC',
  dataSources: [ 'ContrAcctPartnerCorrespondence' ],
  quota: {
    maximumFields: 170,
    maximumBytes: 3400
  },
  allowNewCompositions: true
}

define view entity I_ContrAcctPrtnCorrespncTP 
  as projection on R_ContrAcctPrtnCorrespncTP as ContrAcctPartnerCorrespondence
  {
  
  key ContractAccount,
  key BusinessPartner,
  key ContrAcctPrtnCorrespncUUID,
  AddrIDOfCorrespncRcpnt,
  CorrespncRcpntAddrIsSpecified,
  CACorrespondenceType,
  CorrespondenceRole,
  CorrespondenceRecipient,
  CAOriglPartIsNotRcvgCorrespnc,
  //CACorrespondenceActivityCode, ContrAcctPrtnCorrespncTP
  
  /* Associations */
  _BusinessPartner,
  //_CACorrespncActivityCode, ContrAcctPrtnCorrespncTP
  _CACorrespondenceType,
  _ContractAccount: redirected to I_ContractAccountTP,
  _ContractAccountPartner: redirected to parent I_ContractAccountPartnerTP,
  _CorrespncRole,
  _CorrespondenceRecipient
}
```
