---
name: I_LEGALTRANSACTIONAPI01
description: "Legaltransactionapi 01"
app_component: CM-LT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_LEGALTRANSACTIONAPI01

**Legaltransactionapi 01**

| Property | Value |
|---|---|
| App Component | `CM-LT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LegalTransactionUUID` | ✓ | |  |  |  |  |
| `LegalTransaction` |  | |  |  |  |  |
| `LegalTransactionTitle` |  | |  |  |  |  |
| `LglCntntMContextUUID` |  | |  |  |  |  |
| `LegalTransactionHealth` |  | |  |  |  |  |
| `LglCntntMLanguage` |  | |  |  |  |  |
| `LglTransWrkFlwModInstce` |  | |  |  |  |  |
| `LegalTransactionSource` |  | |  |  |  |  |
| `LglCntntMAgingTemperature` |  | |  |  |  |  |
| `LglCntntMRtntnPerdStartDate` |  | |  |  |  |  |
| `LglCntntMGovLaw` |  | |  |  |  |  |
| `LglCntntMMainOrgType` |  | |  |  |  |  |
| `LglCntntMLongTextUUID` |  | |  |  |  |  |
| `CopiedFromLegalTransactionUUID` |  | |  | `LglCntntMCrtedFrmLglTransUUID` |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |  |  |
| `LglCntntMLongText` |  | |  |  |  |  |
| `LglCntntMLongTextMimeType` |  | |  |  |  |  |
| `LglCntntMProfile` |  | |  |  |  |  |
| `LglTransAccessLvl` |  | |  |  |  |  |
| `LglCntntMMainOrgCoCode` |  | |  |  |  |  |
| `LglCntntMMainOrgSalesOrg` |  | |  |  |  |  |
| `LglCntntMMainOrgPurOrg` |  | |  |  |  |  |
| `LglCntntMCreatedByUser` |  | |  |  |  |  |
| `LglCntntMCreatedUTCDateTime` |  | |  |  |  |  |
| `LglCntntMChangedByUser` |  | |  |  |  |  |
| `LglCntntMChangedUTCDateTime` |  | |  |  |  |  |
| `_LegalContextAPI01` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_LegalContextAPI01` | `I_LegalContextAPI01` | [0..1] |
| `_Extension` | `E_LegalTransaction` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ILEGALTRAPI01'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType : #BASIC

@ObjectModel: {
  semanticKey: ['LegalTransaction'],
  representativeKey: 'LegalTransactionUUID',
  usageType.serviceQuality: #B,
  usageType.sizeCategory: #XL,
  usageType.dataClass: #TRANSACTIONAL
}

@Metadata.ignorePropagatedAnnotations:true
@AccessControl.personalData.blocking: #REQUIRED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]

@EndUserText.label: 'Legal Transaction'

define view I_LegalTransactionAPI01
  as select from I_LegalTransaction

  //Context
  association [0..1] to I_LegalContextAPI01 as _LegalContextAPI01 on $projection.LglCntntMContextUUID = _LegalContextAPI01.LglCntntMContextUUID

  //Extension
  association [1..1] to E_LegalTransaction  as _Extension         on $projection.LegalTransactionUUID = _Extension.LegalTransactionUUID

{

  key LegalTransactionUUID,
      LegalTransaction,
      LegalTransactionTitle,
      LglCntntMContextUUID,
      LegalTransactionHealth,
      LglCntntMLanguage,
      LglTransWrkFlwModInstce,
      LegalTransactionSource,
      LglCntntMAgingTemperature,
      LglCntntMRtntnPerdStartDate,
      LglCntntMGovLaw,
      LglCntntMMainOrgType,
      LglCntntMLongTextUUID,
      LglCntntMCrtedFrmLglTransUUID as CopiedFromLegalTransactionUUID,
      @Semantics.booleanIndicator: true
      IsEndOfPurposeBlocked,

      // Notes
      LglCntntMLongText,
      LglCntntMLongTextMimeType,

      // Fields used in DCL
      LglCntntMProfile,
      LglTransAccessLvl,
      LglCntntMMainOrgCoCode,
      LglCntntMMainOrgSalesOrg,
      LglCntntMMainOrgPurOrg,

      //  Administrative data
      LglCntntMCreatedByUser,
      LglCntntMCreatedUTCDateTime,
      LglCntntMChangedByUser,
      LglCntntMChangedUTCDateTime,

      //Assotiations
      _LegalContextAPI01

}

where
     IsEndOfPurposeBlocked = ''
  or IsEndOfPurposeBlocked is null
```
