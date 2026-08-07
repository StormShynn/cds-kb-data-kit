---
name: I_PROJDMNDRSCEREQDISTRTP
description: "Projdmndrscereqdistrtp"
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
  - transactional-processing
  - component:PPM-SCL-DMN
  - lob:Other
---
# I_PROJDMNDRSCEREQDISTRTP

**Projdmndrscereqdistrtp**

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
| `ProjectUUID` |  | |  |  |  |  |
| `ReferencedObjectUUID` |  | |  |  |  |  |
| `ProjDmndRsceReqDistrYearVal` |  | |  |  |  |  |
| `ProjDmndRsceReqDistrPerdVal` |  | |  |  |  |  |
| `ProjDmndRsceReqDistrQuantity` |  | |  |  |  |  |
| `ProjDmndRsceReqDistrQtyUnit` |  | |  |  |  |  |
| `ProjDmndRsceReqDistrPerdAmt` |  | |  |  |  |  |
| `ProjDmndRsceReqDistrPerdAmtCur` |  | |  |  |  |  |
| `ProjDmndRsceReqDistrRevenueAmt` |  | |  |  |  |  |
| `ProjDmndRsceReqDistrRevnAmtCur` |  | |  |  |  |  |
| `ProjDmndReferencedPlanDataUUID` |  | |  |  |  |  |
| `ProjDmndRsceReqDistrStartDate` |  | |  |  |  |  |
| `ProjDmndRsceReqDistrEndDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_Root` | | ✓ | | | | |
| `_EnterpriseProject` | | ✓ | | | | |
| `_ProjDmndRsceReqDistrQtyUnit` | | ✓ | | | | |
| `_DmndRsceReqDistrPerdAmtCur` | | ✓ | | | | |
| `_DmndRsceReqDistrRevnAmtCur` | | ✓ | | | | |
| `_ProjDmndRsceReq` | | ✓ | | | | |

## Source Code

```abap
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel: { modelingPattern       : #TRANSACTIONAL_INTERFACE,
                representativeKey     : 'ProjDmndRsceReqDistrUUID',
                supportedCapabilities : [#TRANSACTIONAL_PROVIDER],
                usageType             : { serviceQuality : #B,
                                          dataClass      : #TRANSACTIONAL,
                                          sizeCategory   : #XL } }
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Resource Request Distribution - TP'

define view entity I_ProjDmndRsceReqDistrTP
  as projection on R_ProjDmndRsceReqDistrTP as DmndRsceRequestDistribution
{
  key ProjDmndRsceReqDistrUUID,
      ProjDmndResourceRequestUUID,
      ProjectDemandUUID,
      ProjectUUID,
      ReferencedObjectUUID,
      ProjDmndRsceReqDistrYearVal,
      ProjDmndRsceReqDistrPerdVal,
      @Semantics: { quantity : {unitOfMeasure: 'ProjDmndRsceReqDistrQtyUnit'} }
      ProjDmndRsceReqDistrQuantity,
      ProjDmndRsceReqDistrQtyUnit,
      @Semantics: { amount : {currencyCode: 'ProjDmndRsceReqDistrPerdAmtCur'} }
      ProjDmndRsceReqDistrPerdAmt,
      ProjDmndRsceReqDistrPerdAmtCur,
      @Semantics: { amount : {currencyCode: 'ProjDmndRsceReqDistrRevnAmtCur'} }
      ProjDmndRsceReqDistrRevenueAmt,
      ProjDmndRsceReqDistrRevnAmtCur,
      ProjDmndReferencedPlanDataUUID,
      ProjDmndRsceReqDistrStartDate,
      ProjDmndRsceReqDistrEndDate,
      CreatedByUser,
      CreationDateTime,
      LastChangedByUser,
      LastChangeDateTime,

      /* BO internal Associations */
      _Root            : redirected to I_ProjectDemandTP_2,

      /* External Associations */
      _EnterpriseProject,

      /* I_ProjDmndRsceReqDistribution Associations */
      _ProjDmndRsceReqDistrQtyUnit,
      _DmndRsceReqDistrPerdAmtCur,
      _DmndRsceReqDistrRevnAmtCur,

      /*  I_ProjDmndResourceRequestTP Associations */
      _ProjDmndRsceReq : redirected to parent I_ProjDmndResourceRequestTP
}
```
