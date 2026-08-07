---
name: I_PROJDMNDRSCEREQDISTRIBUTION
description: "Projdmndrscereqdistribution"
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
# I_PROJDMNDRSCEREQDISTRIBUTION

**Projdmndrscereqdistribution**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjDmndRsceReqDistrUUID` | ✓ | |  |  |  |  |
| `ProjDmndResourceRequestUUID` |  | |  |  |  |  |
| `ProjectDemandUUID` |  | |  |  |  |  |
| `ProjDmndRsceReqDistrYearVal` |  | |  |  |  |  |
| `ProjDmndRsceReqDistrPerdVal` |  | |  |  |  |  |
| `ProjDmndRsceReqDistrQuantity` |  | |  |  |  |  |
| `ProjDmndRsceReqDistrQtyUnit` |  | |  |  |  |  |
| `ProjDmndRsceReqDistrPerdAmt` |  | |  |  |  |  |
| `ProjDmndRsceReqDistrPerdAmtCur` |  | |  |  |  |  |
| `ProjDmndRsceReqDistrRevenueAmt` |  | |  |  |  |  |
| `ProjDmndRsceReqDistrRevnAmtCur` |  | |  |  |  |  |
| `ProjDmndRsceReqDistrStartDate` |  | |  |  |  |  |
| `ProjDmndRsceReqDistrEndDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_Root` | | ✓ | | | | |
| `_ProjDmndRsceReq` | | ✓ | | | | |
| `_ProjDmndRsceReqDistrQtyUnit` | | ✓ | | | | |
| `_DmndRsceReqDistrPerdAmtCur` | | ✓ | | | | |
| `_DmndRsceReqDistrRevnAmtCur` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Root` | `I_ProjectDemand` | [1] |
| `_ProjDmndRsceReq` | `I_ProjectDemandResourceRequest` | [1] |
| `_ProjDmndRsceReqDistrQtyUnit` | `I_UnitOfMeasure` | [0..1] |
| `_DmndRsceReqDistrPerdAmtCur` | `I_Currency` | [0..1] |
| `_DmndRsceReqDistrRevnAmtCur` | `I_Currency` | [0..1] |

## Source Code

```abap
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API

@ClientHandling.algorithm: #SESSION_VARIABLE

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED

@AbapCatalog: {
    sqlViewName: 'IPRJDMNDRSCERD',
    compiler.compareFilter: true,
    preserveKey:true
}

@ObjectModel: {
   modelingPattern: #ANALYTICAL_DIMENSION,
   supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
   representativeKey: 'ProjDmndRsceReqDistrUUID',
   sapObjectNodeType.name: 'DmndRsceRequestDistribution',
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
@EndUserText.label: 'Resource Req Distribution for Rsce Dmnd'

define view I_ProjDmndRsceReqDistribution
  as select from R_ProjDmndRsceReqDistribution

  association [1]    to I_ProjectDemand                as _Root                        on $projection.ProjectDemandUUID = _Root.ProjectDemandUUID  
  association [1]    to I_ProjectDemandResourceRequest as _ProjDmndRsceReq             on $projection.ProjDmndResourceRequestUUID = _ProjDmndRsceReq.ProjDmndResourceRequestUUID

  association [0..1] to I_UnitOfMeasure                as _ProjDmndRsceReqDistrQtyUnit on $projection.ProjDmndRsceReqDistrQtyUnit = _ProjDmndRsceReqDistrQtyUnit.UnitOfMeasure
  association [0..1] to I_Currency                     as _DmndRsceReqDistrPerdAmtCur  on $projection.ProjDmndRsceReqDistrPerdAmtCur = _DmndRsceReqDistrPerdAmtCur.Currency
  association [0..1] to I_Currency                     as _DmndRsceReqDistrRevnAmtCur  on $projection.ProjDmndRsceReqDistrRevnAmtCur = _DmndRsceReqDistrRevnAmtCur.Currency

{
  key ProjDmndRsceReqDistrUUID       as ProjDmndRsceReqDistrUUID,
      ProjDmndResourceRequestUUID    as ProjDmndResourceRequestUUID,      
      ProjectDemandUUID              as ProjectDemandUUID,
      ProjDmndRsceReqDistrYearVal    as ProjDmndRsceReqDistrYearVal,
      ProjDmndRsceReqDistrPerdVal    as ProjDmndRsceReqDistrPerdVal,

      @Semantics: { quantity : {unitOfMeasure: 'ProjDmndRsceReqDistrQtyUnit'} }
      ProjDmndRsceReqDistrQuantity   as ProjDmndRsceReqDistrQuantity,

      ProjDmndRsceReqDistrQtyUnit    as ProjDmndRsceReqDistrQtyUnit,

      @Semantics: { amount : {currencyCode: 'ProjDmndRsceReqDistrPerdAmtCur'} }
      ProjDmndRsceReqDistrPerdAmt    as ProjDmndRsceReqDistrPerdAmt,

      @ObjectModel.foreignKey.association:    '_DmndRsceReqDistrPerdAmtCur'
      ProjDmndRsceReqDistrPerdAmtCur as ProjDmndRsceReqDistrPerdAmtCur,

      @Semantics: { amount : {currencyCode: 'ProjDmndRsceReqDistrRevnAmtCur'} }
      ProjDmndRsceReqDistrRevenueAmt as ProjDmndRsceReqDistrRevenueAmt,

      @ObjectModel.foreignKey.association:    '_DmndRsceReqDistrRevnAmtCur'
      ProjDmndRsceReqDistrRevnAmtCur as ProjDmndRsceReqDistrRevnAmtCur,

      ProjDmndRsceReqDistrStartDate  as ProjDmndRsceReqDistrStartDate,
      ProjDmndRsceReqDistrEndDate    as ProjDmndRsceReqDistrEndDate,

      @Semantics.user.createdBy: true
      CreatedByUser                  as CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      CreationDateTime               as CreationDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser              as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime             as LastChangeDateTime,

      /* BO internal Associations */
      _Root,
      _ProjDmndRsceReq,

      /* External Associations */
      _ProjDmndRsceReqDistrQtyUnit,
      _DmndRsceReqDistrPerdAmtCur,
      _DmndRsceReqDistrRevnAmtCur
}
```
