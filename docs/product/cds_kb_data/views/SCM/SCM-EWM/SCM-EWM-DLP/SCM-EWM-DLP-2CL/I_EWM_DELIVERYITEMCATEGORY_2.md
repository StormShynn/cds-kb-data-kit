---
name: I_EWM_DELIVERYITEMCATEGORY_2
description: "This CDS view provides information about delivery item document category in the system. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_DELIVERYITEMCATEGORY_2')/$value
semantic_en: "This CDS view provides information about delivery item document category in the system. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Warehouse Delivery Item Category — CDS view giao diện dựa trên Warehouse Delivery Item Category."
keywords:
  - "warehouse"
  - "delivery"
  - "item"
  - "category"
  - "inbound"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-DLP-2CL
  - delivery
  - document
  - interface-view
  - SCM-EWM
  - SCM-EWM-DLP
  - SCM-EWM-DLP-2CL
---
# I_EWM_DELIVERYITEMCATEGORY_2

**This CDS view provides information about delivery item document category in the system. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_DELIVERYITEMCATEGORY_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMInboundDeliveryItemCategory` | ✓ | |  | `item_category` | `CHAR(3)` | Item Category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EWM_DeliveryItemCatText_2` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_DELIVERYITEMCATEGORY_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_DELIVERYITEMCATEGORY_2')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warehouse Delivery Item Category'

@Analytics.internalName:#LOCAL 
@VDM.viewType:#BASIC
@ObjectModel.representativeKey: 'EWMInboundDeliveryItemCategory'
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IEWMDLVITMCTG2'
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #M}

@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE ]

@Metadata.ignorePropagatedAnnotations:true

define view entity I_EWM_DeliveryItemCategory_2
  as select from /scdl/titmcat as DeliveryItemCategory
  association [0..*] to I_EWM_DeliveryItemCatText_2 as _Text on $projection.EWMInboundDeliveryItemCategory = _Text.EWMInboundDeliveryItemCategory
{
      @ObjectModel.text.association: '_Text'
  key item_category as EWMInboundDeliveryItemCategory,
      _Text

}
```
