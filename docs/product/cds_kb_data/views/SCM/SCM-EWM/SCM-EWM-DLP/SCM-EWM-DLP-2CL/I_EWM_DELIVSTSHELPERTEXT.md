---
name: I_EWM_DELIVSTSHELPERTEXT
description: "Warehouse Delivery Status Helper - Text"
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_DELIVSTSHELPERTEXT')/$value
semantic_en: "Warehouse Delivery Status Helper - Text"
semantic_vi: "Warehouse Delivery Status Helper - Text — CDS view giao diện (master data) dựa trên I_EWM_WhseReqStatusValueText."
keywords:
  - "warehouse"
  - "delivery"
  - "status"
  - "helper"
  - "text"
  - "language"
  - "type"
  - "name"
tags:
  - SCM
  - component:SCM-EWM-DLP-2CL
  - delivery
  - interface-view
  - SCM-EWM
  - SCM-EWM-DLP
  - SCM-EWM-DLP-2CL
---
# I_EWM_DELIVSTSHELPERTEXT

**Warehouse Delivery Status Helper - Text**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_DELIVSTSHELPERTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  |  | `LANG(1)` | Language Key |
| `DeliveryStatus` | ✓ | |  | `EWMWarehouseRequestStatus` | `CHAR(1)` | Status Value |
| `DeliveryStatusType` | ✓ | |  | `cast(EWMWarehouseRequestStatusType as abap.char( 3 ) )` | `CHAR(3)` |  |
| `StatusName` |  | |  | `EWMWarehouseRequestStatusName` | `CHAR(30)` | Individual Status of an Object |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_DELIVSTSHELPERTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_DELIVSTSHELPERTEXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warehouse Delivery Status Helper - Text'

@VDM.viewType:#COMPOSITE

@ObjectModel.representativeKey: 'DeliveryStatus'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IEWMDLVSTSHPLTXT'
@ObjectModel: {usageType: {serviceQuality: #A,
               dataClass: #MASTER,
               sizeCategory: #M}}

@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT,
                                        #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET ]

@Metadata.ignorePropagatedAnnotations:true
define view entity I_EWM_DelivStsHelperText
  as select from I_EWM_WhseReqStatusValueText

{
      @Semantics.language: true
  key Language,
  key EWMWarehouseRequestStatus     as DeliveryStatus,
  key cast(EWMWarehouseRequestStatusType as abap.char( 3 ) ) as DeliveryStatusType,
      @Semantics.text: true
      EWMWarehouseRequestStatusName as StatusName

}
```
