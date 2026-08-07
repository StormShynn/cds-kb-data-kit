---
name: I_PROJDMNDRSCEASSGMTDISTRTP
description: Projdmndrsceassgmtdistrtp
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
# I_PROJDMNDRSCEASSGMTDISTRTP

**Projdmndrsceassgmtdistrtp**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjDmndRsceAssgmtDistrUUID` | ✓ | |  |  |  |  |
| `ProjDmndRsceAssgmtUUID` |  | |  |  |  |  |
| `ProjectDemandUUID` |  | |  |  |  |  |
| `ProjectUUID` |  | |  |  |  |  |
| `ReferencedObjectUUID` |  | |  |  |  |  |
| `ProjDmndRsceAssgmtDistrYearVal` |  | |  |  |  |  |
| `ProjDmndRsceAssgmtDistrPerdVal` |  | |  |  |  |  |
| `ProjDmndRsceAssgmtDistrQty` |  | |  |  |  |  |
| `ProjDmndRsceAssgmtDistrQtyUnit` |  | |  |  |  |  |
| `ProjDmndRsceDistrPerdAmt` |  | |  |  |  |  |
| `ProjDmndRsceDistrPerdAmtCur` |  | |  |  |  |  |
| `ProjDmndRsceDistrRevenueAmt` |  | |  |  |  |  |
| `ProjDmndRsceDistrRevenueAmtCur` |  | |  |  |  |  |
| `ProjDmndReferencedPlanDataUUID` |  | |  |  |  |  |
| `ProjDmndRsceAssgmtDistrStrtDte` |  | |  |  |  |  |
| `ProjDmndRsceAssgmtDistrEndDte` |  | |  |  |  |  |
| `ProjDmndRsceDistrIsNotSupplied` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_Assignment` | | ✓ | | | | |
| `_Root` | | ✓ | | | | |
| `_EnterpriseProject` | | ✓ | | | | |
| `_ProjDmndRsceDistrQtyUnit` | | ✓ | | | | |
| `_ProjDmndRsceDistrPerdAmtCur` | | ✓ | | | | |
| `_ProjDmndRsceDistrRevnAmtCur` | | ✓ | | | | |

## Source Code

```abap
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel: { modelingPattern       : #TRANSACTIONAL_INTERFACE,
                representativeKey     : 'ProjDmndRsceAssgmtDistrUUID',
                supportedCapabilities : [#TRANSACTIONAL_PROVIDER],
                usageType             : { serviceQuality:  #A,
                                          dataClass:       #TRANSACTIONAL,
                                          sizeCategory:    #XL } }
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Resource Assignment Distribution - TP'

define view entity I_ProjDmndRsceAssgmtDistrTP
  as projection on R_ProjDmndRsceAssgmtDistrTP as DmndRsceAssignmentDistribution
{
  key ProjDmndRsceAssgmtDistrUUID,
      ProjDmndRsceAssgmtUUID,
      ProjectDemandUUID,
      ProjectUUID,
      ReferencedObjectUUID,
      ProjDmndRsceAssgmtDistrYearVal,
      ProjDmndRsceAssgmtDistrPerdVal,
      @Semantics: { quantity : {unitOfMeasure: 'ProjDmndRsceAssgmtDistrQtyUnit'} }
      ProjDmndRsceAssgmtDistrQty,
      ProjDmndRsceAssgmtDistrQtyUnit,
      @Semantics: { amount : {currencyCode: 'ProjDmndRsceDistrPerdAmtCur'} }
      ProjDmndRsceDistrPerdAmt,
      ProjDmndRsceDistrPerdAmtCur,
      @Semantics: { amount : {currencyCode: 'ProjDmndRsceDistrRevenueAmtCur'} }
      ProjDmndRsceDistrRevenueAmt,
      ProjDmndRsceDistrRevenueAmtCur,
      ProjDmndReferencedPlanDataUUID,
      ProjDmndRsceAssgmtDistrStrtDte,
      ProjDmndRsceAssgmtDistrEndDte,
      ProjDmndRsceDistrIsNotSupplied,
      CreatedByUser,
      CreationDateTime,
      LastChangedByUser,
      LastChangeDateTime,

      /* BO internal Associations */
      _Assignment : redirected to parent I_ProjDmndRsceAssignmentTP_2,
      _Root       : redirected to I_ProjectDemandTP_2,

      /* External Associations */
      _EnterpriseProject,

      /* I_ProjDmndRsceAssgmtDistr Associations */
      _ProjDmndRsceDistrQtyUnit,
      _ProjDmndRsceDistrPerdAmtCur,
      _ProjDmndRsceDistrRevnAmtCur
}
```
