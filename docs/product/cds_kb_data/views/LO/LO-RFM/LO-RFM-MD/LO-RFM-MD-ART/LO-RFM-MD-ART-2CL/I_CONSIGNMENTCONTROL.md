---
name: I_CONSIGNMENTCONTROL
description: "Consignment Control"
app_component: LO-RFM-MD-ART-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONSIGNMENTCONTROL')/$value
semantic_en: "Consignment Control"
semantic_vi: "Consignment Control — CDS view giao diện dựa trên wrft_cons_procg."
keywords:
  - "consignment"
  - "control"
tags:
  - LO
  - component:LO-RFM-MD-ART-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-ART
  - LO-RFM-MD-ART-2CL
  - lob:logistics general
---
# I_CONSIGNMENTCONTROL

**Consignment Control**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONSIGNMENTCONTROL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsignmentControl` | ✓ | |  | `cast( wrf_cons_procg as consignmentcontrol preserving type )` | `CHAR(1)` | Consignment Control |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONSIGNMENTCONTROL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CONSIGNMENTCONTROL')/$value)*

```abap
@AbapCatalog.sqlViewName: 'ICONSICONTROL'
@EndUserText.label: 'Consignment Control'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'ConsignmentControl' 
@ObjectModel: {
    supportedCapabilities: #VALUE_HELP_PROVIDER,
    dataCategory: #VALUE_HELP,
    compositionRoot: true,
    representativeKey: 'ConsignmentControl',
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    usageType.dataClass: #CUSTOMIZING
}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define root view I_ConsignmentControl
  as select from wrft_cons_procg
  composition [0..*] of I_ConsignmentControlText as _Text
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key cast( wrf_cons_procg as consignmentcontrol preserving type ) as ConsignmentControl,

      _Text

}
```
