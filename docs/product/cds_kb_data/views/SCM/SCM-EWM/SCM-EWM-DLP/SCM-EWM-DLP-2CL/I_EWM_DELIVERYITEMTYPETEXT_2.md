---
name: I_EWM_DELIVERYITEMTYPETEXT_2
description: "This CDS view provides information about delivery item types in the system. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_DELIVERYITEMTYPETEXT_2')/$value
semantic_en: "This CDS view provides information about delivery item types in the system. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Warehouse Delivery Item Type - Text — CDS view giao diện dựa trên Warehouse Delivery Item Type - Text."
keywords:
  - "warehouse"
  - "delivery"
  - "item"
  - "type"
  - "text"
  - "language"
  - "document"
  - "category"
  - "name"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-DLP-2CL
  - delivery
  - interface-view
  - SCM-EWM
  - SCM-EWM-DLP
  - SCM-EWM-DLP-2CL
---
# I_EWM_DELIVERYITEMTYPETEXT_2

**This CDS view provides information about delivery item types in the system. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_DELIVERYITEMTYPETEXT_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `EWMDeliveryDocumentCategory` | ✓ | |  | `category` | `CHAR(3)` | Document Category |
| `DeliveryItemType` | ✓ | |  | `item_type` | `CHAR(4)` | Item Type |
| `DeliveryItemTypeName` |  | |  | `description` | `CHAR(40)` | Description |
| `_DeliveryCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DeliveryCategory` | `I_EWM_DeliveryCategory_2` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_DELIVERYITEMTYPETEXT_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_DELIVERYITEMTYPETEXT_2')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warehouse Delivery Item Type - Text'

@VDM.viewType:#BASIC

@ObjectModel.representativeKey: 'DeliveryItemType'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IEWMDLVITMTYPTX2'
@ObjectModel: {usageType: {serviceQuality: #A,
                           dataClass: #CUSTOMIZING,
                           sizeCategory: #M}}

@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT,
                                        #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET ]

@Metadata.ignorePropagatedAnnotations:true

define view entity I_EWM_DeliveryItemTypeText_2
  as select from /scdl/titypet as Deliveryitemtypename
  association [0..1] to I_EWM_DeliveryCategory_2 as _DeliveryCategory on $projection.EWMDeliveryDocumentCategory = _DeliveryCategory.EWMDeliveryDocumentCategory
{
       @Semantics.language: true
  key  Deliveryitemtypename.langu       as Language,
       @ObjectModel.foreignKey.association: '_DeliveryCategory'
  key  Deliveryitemtypename.category    as EWMDeliveryDocumentCategory,
  key  Deliveryitemtypename.item_type   as DeliveryItemType,
       @Semantics.text: true
       //      @ObjectModel.text.element:['DeliveryItemTypeName']
       Deliveryitemtypename.description as DeliveryItemTypeName,
       _DeliveryCategory
}
```
