---
name: I_WASTETRANSFREQSTSDIMN
description: "Waste Transfer Request Status dimension"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSFREQSTSDIMN')/$value
semantic_en: "Waste Transfer Request Status dimension"
semantic_vi: "Waste Transfer Request Status dimension — CDS view giao diện dựa trên I_WasteTransferRequestStatus."
keywords:
  - "waste"
  - "transfer"
  - "request"
  - "status"
  - "dimension"
  - "transf"
  - "name"
tags:
  - EHS
  - bo:salesorganization
  - component:EHS-SUS-WA
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
---
# I_WASTETRANSFREQSTSDIMN

**Waste Transfer Request Status dimension**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSFREQSTSDIMN')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WasteTransfReqStatus` | ✓ | |  |  | `CHAR(2)` | Status of Waste Transfer Request |
| `WasteTransfReqStatusName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSFREQSTSDIMN')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTETRANSFREQSTSDIMN')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IWSTTRRQSTATDIM'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:
{
  usageType:
  {
    dataClass: #MIXED,
    sizeCategory: #S,
    serviceQuality: #C
  },
  representativeKey: 'WasteTransfReqStatus'
}
@Metadata.allowExtensions:true

@VDM.viewType: #COMPOSITE

@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL

@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities:[#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@EndUserText.label: 'Waste Transfer Request Status dimension'
define view I_WasteTransfReqStsDimn as select from I_WasteTransferRequestStatus
{
  @ObjectModel.text.element: [ 'WasteTransfReqStatusName' ]
  key WasteTransfReqStatus,
  
  @Semantics.text: true
  WasteTransfReqStatusName
}
```
