---
name: I_PRJBLGELMENTRBILLGPLNLINK
description: "Prjblgelmentrbillgplnlink"
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - interface-view
  - component:PPM-SCL-BIL
  - lob:Other
---
# I_PRJBLGELMENTRBILLGPLNLINK

**Prjblgelmentrbillgplnlink**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjBillgElmntEntrItmUUID` | ✓ | |  | `projbillgelmntentritmuuid` |  |  |
| `BillingPlan` |  | |  | `billingplan` |  |  |
| `BillingPlanItem` |  | |  | `billingplanitem` |  |  |
| `CreatedByUser` |  | |  | `createdbyuser` |  |  |
| `CreationDateTime` |  | |  | `creationdatetime` |  |  |
| `LastChangedByUser` |  | |  | `lastchangedbyuser` |  |  |
| `LastChangeDateTime` |  | |  | `lastchangedatetime` |  |  |
| `_ProjectBillingElementEntry` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProjectBillingElementEntry` | `I_ProjectBillingElementEntry` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Billing Plan for Project Billing Element'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
// @AbapCatalog.compiler.compareFilter: true
// @AbapCatalog.sqlViewName: 'IPBEEBPLINK'
@AccessControl.authorizationCheck: #CHECK

@Analytics.dataExtraction.enabled: true
@Analytics.dataExtraction.delta.changeDataCapture.automatic: true

@ObjectModel: {
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE, #UI_PROVIDER_PROJECTION_SOURCE ],
    usageType:{
       sizeCategory: #L,
       dataClass:  #TRANSACTIONAL,
       serviceQuality: #B
    },
    representativeKey: 'ProjBillgElmntEntrItmUUID'
}
// @AbapCatalog.preserveKey:true
// @ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'ProjBillgElmntEntrBillgPlanLnk'

define view entity I_PrjBlgElmEntrBillgPlnLink
  as select from pbeelnkbillgpln as PrjBlgElmEntrBillgPlnLink
  association [1..1] to I_ProjectBillingElementEntry as _ProjectBillingElementEntry on PrjBlgElmEntrBillgPlnLink.projbillgelmntentritmuuid = _ProjectBillingElementEntry.ProjBillgElmntEntrItmUUID
  
//  association [1..1] to I_SalesOrderBillingPlanItem  as _SalesOrderBillingPlanItem  on PrjBlgElmEntrBillgPlnLink.billingplan               = _SalesOrderBillingPlanItem.BillingPlan
//                                                                                    and PrjBlgElmEntrBillgPlnLink.billingplanitem          = _SalesOrderBillingPlanItem.BillingPlanItem

{
  key PrjBlgElmEntrBillgPlnLink.projbillgelmntentritmuuid   as ProjBillgElmntEntrItmUUID,
      PrjBlgElmEntrBillgPlnLink.billingplan                 as BillingPlan,
      PrjBlgElmEntrBillgPlnLink.billingplanitem             as BillingPlanItem,
      @Semantics.user.createdBy: true
      PrjBlgElmEntrBillgPlnLink.createdbyuser               as CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      PrjBlgElmEntrBillgPlnLink.creationdatetime            as CreationDateTime,
      @Semantics.user.lastChangedBy: true
      PrjBlgElmEntrBillgPlnLink.lastchangedbyuser           as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      PrjBlgElmEntrBillgPlnLink.lastchangedatetime          as LastChangeDateTime,

      _ProjectBillingElementEntry
//      _SalesOrderBillingPlanItem
}
```
