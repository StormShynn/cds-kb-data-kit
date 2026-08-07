---
name: I_LEGALCONTEXTAPI01
description: Legalcontextapi 01
app_component: CM-CTX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CM
  - CM-CTX
  - interface-view
  - text
  - component:CM-CTX-2CL
  - lob:Other
---
# I_LEGALCONTEXTAPI01

**Legalcontextapi 01**

| Property | Value |
|---|---|
| App Component | `CM-CTX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LglCntntMContextUUID` | ✓ | |  |  |  |  |
| `LglCntntMContext` |  | |  |  |  |  |
| `LglCntntMContextVersion` |  | |  |  |  |  |
| `LglCntntMContextTitle` |  | |  |  |  |  |
| `LglCntntMContextOwner` |  | |  |  |  |  |
| `LglCntntMProfile` |  | |  |  |  |  |
| `LglCntntMContextStatus` |  | |  |  |  |  |
| `LglCntntMContextValidFromDate` |  | |  |  |  |  |
| `LglCntntMContextValidToDate` |  | |  |  |  |  |
| `LglCntntMCntxtLanguage` |  | |  |  |  |  |
| `LglCntntMPrevCntxtVers` |  | |  |  |  |  |
| `LglCntntMCntxtIsReadOnly` |  | |  |  |  |  |
| `LglCntntMGovLaw` |  | |  |  |  |  |
| `LglCntntMCntxtAccessLvl` |  | |  |  |  |  |
| `LglCntntMMainOrgType` |  | |  |  |  |  |
| `LglCntntMMainOrgCoCode` |  | |  |  |  |  |
| `LglCntntMMainOrgSalesOrg` |  | |  |  |  |  |
| `LglCntntMMainOrgPurOrg` |  | |  |  |  |  |
| `LglCntntMCreatedByUser` |  | |  |  |  |  |
| `LglCntntMCreatedUTCDateTime` |  | |  |  |  |  |
| `LglCntntMChangedUTCDateTime` |  | |  |  |  |  |
| `LglCntntMChangedByUser` |  | |  |  |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_LglCntntMContext` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ILCMCONTEXTAPI01'
@AbapCatalog.compiler.compareFilter:true 
@AbapCatalog.preserveKey:true 
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck:#CHECK
@VDM.viewType : #BASIC

@ObjectModel: {
  semanticKey: 'LglCntntMContext',
  representativeKey: 'LglCntntMContextUUID',
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #L,
  usageType.dataClass: #TRANSACTIONAL
}

@AccessControl.personalData.blocking: #REQUIRED

@Metadata.ignorePropagatedAnnotations:true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ObjectModel.supportedCapabilities:[ #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET ]

@EndUserText.label: 'Legal Context'
define view I_LegalContextAPI01
  as select from I_LglCntntMContextBasic

  //Extension
  association [1..1] to E_LglCntntMContext as _Extension on $projection.LglCntntMContextUUID = _Extension.LglCntntMContextUUID

{

      //Key
  key LglCntntMContextUUID,

      LglCntntMContext,
      LglCntntMContextVersion,
      LglCntntMContextTitle,
      LglCntntMContextOwner,
      LglCntntMProfile,

      //Status
      LglCntntMContextStatus,


      //Validity
      LglCntntMContextValidFromDate,
      LglCntntMContextValidToDate,

      LglCntntMCntxtLanguage,
      LglCntntMPrevCntxtVers,
      LglCntntMCntxtIsReadOnly,
      LglCntntMGovLaw,
      LglCntntMCntxtAccessLvl,

      //Organization
      LglCntntMMainOrgType,
      LglCntntMMainOrgCoCode,
      LglCntntMMainOrgSalesOrg,
      LglCntntMMainOrgPurOrg,
      
      //Administration
      LglCntntMCreatedByUser,
      LglCntntMCreatedUTCDateTime,
      LglCntntMChangedUTCDateTime,
      LglCntntMChangedByUser

}
where

     IsEndOfPurposeBlocked = ''
  or IsEndOfPurposeBlocked is null
```
