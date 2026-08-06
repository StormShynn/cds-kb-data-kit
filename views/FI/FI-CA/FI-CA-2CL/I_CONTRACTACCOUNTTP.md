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

| Field | Data Source |
|---|---|
| key `ContractAccount` | `ContractAccount` |
| `ContractAccountForEdit` | `ContractAccountForEdit` |
| `CreationDate` | `CreationDate` |
| `CreationTime` | `CreationTime` |
| `CreatedByUser` | `CreatedByUser` |
| `IsMarkedForDeletion` | `IsMarkedForDeletion` |
| `LastChangeDate` | `LastChangeDate` |
| `LastChangeTime` | `LastChangeTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `CAApplicationArea` | `CAApplicationArea` |
| `ContractAccountCategory` | `ContractAccountCategory` |
| `ContractAccountExtReference` | `ContractAccountExtReference` |
| `ContractAccountName` | `ContractAccountName` |
| `PlannedChangeValidityDate` | `PlannedChangeValidityDate` |
| `CreationDateTime` | `CreationDateTime` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `_ContractAccountPartner` | *Association* |
| `_ContractAccountTaxExemption` | *Association* |
| `_ContractAccountChangeDocument` | *Association* |
| `_CreatedByContactCard` | *Association* |
| `_LastChangedByContactCard` | *Association* |
| `_CAApplicationArea` | *Association* |
| `_ContractAccountCategory` | *Association* |

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
