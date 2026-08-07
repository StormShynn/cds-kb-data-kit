---
name: I_PROJDMNDRSCEASSGMTDISTR
description: Projdmndrsceassgmtdistr
app_component: PPM-SCL-DMN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-DMN
  - interface-view
  - component:PPM-SCL-DMN
  - lob:Other
---
# I_PROJDMNDRSCEASSGMTDISTR

**Projdmndrsceassgmtdistr**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProjDmndRsceAssgmtDistrUUID` | ✓ | |  |  |
| `ProjDmndRsceAssgmtUUID` |  | |  |  |
| `ProjectDemandUUID` |  | |  |  |
| `ProjDmndRsceAssgmtDistrYearVal` |  | |  |  |
| `ProjDmndRsceAssgmtDistrPerdVal` |  | |  |  |
| `ProjDmndRsceAssgmtDistrQty` |  | |  | `} ProjDmndRsceAssgmtDistrQty` |
| `ProjDmndRsceAssgmtDistrQtyUnit` |  | |  |  |
| `ProjDmndRsceDistrPerdAmt` |  | |  | `} ProjDmndRsceDistrPerdAmt` |
| `ProjDmndRsceDistrPerdAmtCur` |  | |  |  |
| `ProjDmndRsceDistrRevenueAmt` |  | |  | `} ProjDmndRsceDistrRevenueAmt` |
| `ProjDmndRsceDistrRevenueAmtCur` |  | |  |  |
| `ProjDmndRsceAssgmtDistrStrtDte` |  | |  |  |
| `ProjDmndRsceAssgmtDistrEndDte` |  | |  |  |
| `ProjDmndRsceDistrIsNotSupplied` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDateTime` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `_Assignment` | | ✓ | | |
| `_Root` | | ✓ | | |
| `_ProjDmndRsceDistrQtyUnit` | | ✓ | | |
| `_ProjDmndRsceDistrPerdAmtCur` | | ✓ | | |
| `_ProjDmndRsceDistrRevnAmtCur` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Assignment` | `I_ProjDmndResourceAssignment` | [1] |
| `_Root` | `I_ProjectDemand` | [1] |
| `_ProjDmndRsceDistrQtyUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ProjDmndRsceDistrPerdAmtCur` | `I_Currency` | [0..1] |
| `_ProjDmndRsceDistrRevnAmtCur` | `I_Currency` | [0..1] |

## Source Code

```abap
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API

@ClientHandling.algorithm: #SESSION_VARIABLE

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@AbapCatalog: {
    sqlViewName: 'IPRJDMNDRSCEAD',
    compiler.compareFilter: true,
    preserveKey:true
}

@ObjectModel: {
   modelingPattern: #ANALYTICAL_DIMENSION,
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
   representativeKey: 'ProjDmndRsceAssgmtDistrUUID',
   sapObjectNodeType.name: 'DmndRsceAssignmentDistribution',
   usageType: {
     serviceQuality:  #A,
     dataClass:       #TRANSACTIONAL,
     sizeCategory:    #XL
   }
}

@Analytics: {
  dataExtraction: { 
    enabled: true,
    delta.changeDataCapture: {
      automatic: true
    }
  }
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Rsce Assgmt Distribution for Rsce Dmnd'

define view I_ProjDmndRsceAssgmtDistr
  as select from R_ProjDmndRsceAssgmtDistr

  association [1]    to I_ProjDmndResourceAssignment as _Assignment                  on $projection.ProjDmndRsceAssgmtUUID = _Assignment.ProjDmndRsceAssgmtUUID
  association [1]    to I_ProjectDemand              as _Root                        on $projection.ProjectDemandUUID = _Root.ProjectDemandUUID  

  association [0..1] to I_UnitOfMeasure              as _ProjDmndRsceDistrQtyUnit    on $projection.ProjDmndRsceAssgmtDistrQtyUnit = _ProjDmndRsceDistrQtyUnit.UnitOfMeasure
  association [0..1] to I_Currency                   as _ProjDmndRsceDistrPerdAmtCur on $projection.ProjDmndRsceDistrPerdAmtCur = _ProjDmndRsceDistrPerdAmtCur.Currency
  association [0..1] to I_Currency                   as _ProjDmndRsceDistrRevnAmtCur on $projection.ProjDmndRsceDistrRevenueAmtCur = _ProjDmndRsceDistrRevnAmtCur.Currency

{
  key ProjDmndRsceAssgmtDistrUUID    as ProjDmndRsceAssgmtDistrUUID,
      ProjDmndRsceAssgmtUUID         as ProjDmndRsceAssgmtUUID,      
      ProjectDemandUUID              as ProjectDemandUUID,
      ProjDmndRsceAssgmtDistrYearVal as ProjDmndRsceAssgmtDistrYearVal,
      ProjDmndRsceAssgmtDistrPerdVal as ProjDmndRsceAssgmtDistrPerdVal,

      @Semantics: { quantity : {unitOfMeasure: 'ProjDmndRsceAssgmtDistrQtyUnit'} }
      ProjDmndRsceAssgmtDistrQty     as ProjDmndRsceAssgmtDistrQty,

      ProjDmndRsceAssgmtDistrQtyUnit as ProjDmndRsceAssgmtDistrQtyUnit,

      @Semantics: { amount : {currencyCode: 'ProjDmndRsceDistrPerdAmtCur'} }
      ProjDmndRsceDistrPerdAmt       as ProjDmndRsceDistrPerdAmt,

      @ObjectModel.foreignKey.association:    '_ProjDmndRsceDistrPerdAmtCur'
      ProjDmndRsceDistrPerdAmtCur    as ProjDmndRsceDistrPerdAmtCur,

      @Semantics: { amount : {currencyCode: 'ProjDmndRsceDistrRevenueAmtCur'} }
      ProjDmndRsceDistrRevenueAmt    as ProjDmndRsceDistrRevenueAmt,

      @ObjectModel.foreignKey.association:    '_ProjDmndRsceDistrRevnAmtCur'
      ProjDmndRsceDistrRevenueAmtCur as ProjDmndRsceDistrRevenueAmtCur,

      ProjDmndRsceAssgmtDistrStrtDte as ProjDmndRsceAssgmtDistrStrtDte,
      ProjDmndRsceAssgmtDistrEndDte  as ProjDmndRsceAssgmtDistrEndDte,
      ProjDmndRsceDistrIsNotSupplied as ProjDmndRsceDistrIsNotSupplied,

      @Semantics.user.createdBy: true
      CreatedByUser                  as CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      CreationDateTime               as CreationDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser              as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime             as LastChangeDateTime,

      /* BO internal Associations */
      _Assignment,
      _Root,

      /* External Associations */
      _ProjDmndRsceDistrQtyUnit,
      _ProjDmndRsceDistrPerdAmtCur,
      _ProjDmndRsceDistrRevnAmtCur

}
```
