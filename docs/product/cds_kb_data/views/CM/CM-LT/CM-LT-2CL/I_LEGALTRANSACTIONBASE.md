---
name: I_LEGALTRANSACTIONBASE
description: "Legaltransactionbase"
app_component: CM-LT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-LT
  - interface-view
  - component:CM-LT-2CL
  - lob:Other
---
# I_LEGALTRANSACTIONBASE

**Legaltransactionbase**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LegalTransactionUUID` | ✓ | |  | `legaltransactionuuid` |  |  |
| `LegalTransaction` |  | |  | `legaltransaction` |  |  |
| `LegalTransactionTitle` |  | |  | `legaltransactiontitle` |  |  |
| `LegalTransactionHealth` |  | |  | `legaltransactionhealth` |  |  |
| `LglCntntMLanguage` |  | |  | `lglcntntmlanguage` |  |  |
| `LglCntntMCreatedByUser` |  | |  | `lglcntntmcreatedbyuser` |  |  |
| `LglCntntMCreatedUTCDateTime` |  | |  | `lglcntntmcreatedutcdatetime` |  |  |
| `LglCntntMChangedByUser` |  | |  | `lglcntntmchangedbyuser` |  |  |
| `LglCntntMChangedUTCDateTime` |  | |  | `lglcntntmchangedutcdatetime` |  |  |
| `LglCntntMProfile` |  | |  | `lglcntntmprofile` |  |  |
| `IsEndOfPurposeBlocked` |  | |  | `isendofpurposeblocked` |  |  |
| `LglCntntMGovLaw` |  | |  | `lglcntntmgovlaw` |  |  |
| `LglTransAccessLvl` |  | |  | `lgltransaccesslvl` |  |  |
| `LglCntntMMainOrgType` |  | |  | `lglcntntmmainorgtype` |  |  |
| `LglCntntMMainOrgCoCode` |  | |  | `lglcntntmmainorgcocode` |  |  |
| `LglCntntMMainOrgSalesOrg` |  | |  | `lglcntntmmainorgsalesorg` |  |  |
| `LglCntntMMainOrgPurOrg` |  | |  | `lglcntntmmainorgpurorg` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_LegalTransaction` | [1..1] |

## Source Code

```abap
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.sqlViewName: 'ILEGALTRBASE'
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck:#CHECK
@VDM.viewType : #BASIC

@ObjectModel: {
  usageType.serviceQuality: #B,
  usageType.sizeCategory: #XL,
  usageType.dataClass: #TRANSACTIONAL
}

@AccessControl.personalData.blocking: #REQUIRED

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]

@EndUserText.label: 'Basic Data of Legal Transaction'
define view I_LegalTransactionBase
  as select from lcm_legaltr

  //Extension
  association [1..1] to E_LegalTransaction as _Extension on $projection.LegalTransactionUUID = _Extension.LegalTransactionUUID
{
      @Consumption.filter.hidden : true
  key legaltransactionuuid        as LegalTransactionUUID,

      legaltransaction            as LegalTransaction,

      @Semantics.text: true
      legaltransactiontitle       as LegalTransactionTitle,

      legaltransactionhealth      as LegalTransactionHealth,
      lglcntntmlanguage           as LglCntntMLanguage,
      lglcntntmcreatedbyuser      as LglCntntMCreatedByUser,
      lglcntntmcreatedutcdatetime as LglCntntMCreatedUTCDateTime,
      lglcntntmchangedbyuser      as LglCntntMChangedByUser,
      lglcntntmchangedutcdatetime as LglCntntMChangedUTCDateTime,
      lglcntntmprofile            as LglCntntMProfile,
      


      @Consumption.filter.hidden: true
      @Semantics.booleanIndicator: true
      isendofpurposeblocked       as IsEndOfPurposeBlocked,
      lglcntntmgovlaw             as LglCntntMGovLaw,
      lgltransaccesslvl           as LglTransAccessLvl,
      lglcntntmmainorgtype        as LglCntntMMainOrgType,
      lglcntntmmainorgcocode      as LglCntntMMainOrgCoCode,
      lglcntntmmainorgsalesorg    as LglCntntMMainOrgSalesOrg,
      lglcntntmmainorgpurorg      as LglCntntMMainOrgPurOrg
}
```
