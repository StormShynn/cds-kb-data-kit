---
name: I_CONTRACTACCOUNTTP
description: Contractaccounttp
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
  - contract
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CONTRACTACCOUNTTP

**Contractaccounttp**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ContractAccount` | ✓ | |  |  |  |  |
| `ContractAccountForEdit` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `CAApplicationArea` |  | |  |  |  |  |
| `ContractAccountCategory` |  | |  |  |  |  |
| `ContractAccountExtReference` |  | |  |  |  |  |
| `ContractAccountName` |  | |  |  |  |  |
| `PlannedChangeValidityDate` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_ContractAccountPartner` | | ✓ | | | | |
| `_ContractAccountTaxExemption` | | ✓ | | | | |
| `_ContractAccountChangeDocument` | | ✓ | | | | |
| `_CreatedByContactCard` | | ✓ | | | | |
| `_LastChangedByContactCard` | | ✓ | | | | |
| `_CAApplicationArea` | | ✓ | | | | |
| `_ContractAccountCategory` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData.blocking: #NOT_REQUIRED,
                  privilegedAssociations: [ '_ContractAccountChangeDocument', '_CreatedByContactCard', '_LastChangedByContactCard' ] }

@EndUserText.label: 'Contract Account - TP'

@ObjectModel: { modelingPattern:        #TRANSACTIONAL_INTERFACE,
                representativeKey:      'ContractAccount',
                sapObjectNodeType.name: 'ContractAccount',
                supportedCapabilities:  [#TRANSACTIONAL_PROVIDER],
                usageType:              { dataClass: #MASTER,
                                          serviceQuality: #C,
                                          sizeCategory: #XL } }

@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType:                #TRANSACTIONAL }
@Metadata.ignorePropagatedAnnotations: true

@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'VKK',
  dataSources: [ 'ContractAccount' ],
  quota: {
    maximumFields: 170,
    maximumBytes: 3400
  },
  allowNewCompositions: true
}

define root view entity I_ContractAccountTP 
  provider contract transactional_interface 
  as projection on R_ContractAccountTP as ContractAccount
{
    key ContractAccount,

      @ObjectModel.editableFieldFor: 'ContractAccount'
      ContractAccountForEdit,

      CreationDate,
      CreationTime,
      
//      @Semantics.user.createdBy: true
      CreatedByUser,
      IsMarkedForDeletion,
      LastChangeDate,
      LastChangeTime,
      LastChangedByUser,
      CAApplicationArea,
      ContractAccountCategory,
      ContractAccountExtReference,
      ContractAccountName,

      PlannedChangeValidityDate,

      CreationDateTime,
      //etag
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,

      /* Associations */
      _ContractAccountPartner: redirected to composition child I_ContractAccountPartnerTP,
      _ContractAccountTaxExemption: redirected to composition child I_ContrAcctTaxExemptionTP,

      _ContractAccountChangeDocument,
      _CreatedByContactCard,
      _LastChangedByContactCard,

      _CAApplicationArea,
      _ContractAccountCategory
}
```
