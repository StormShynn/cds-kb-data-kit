---
name: I_EWM_DELIVERYTYPE_2
description: "Ewm Deliverytype 2"
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-DLP
  - interface-view
  - delivery
  - component:SCM-EWM-DLP-2CL
  - lob:Other
---
# I_EWM_DELIVERYTYPE_2

**Ewm Deliverytype 2**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMDeliveryDocumentCategory` | ✓ | |  | `category` |  |  |
| `EWMDeliveryDocumentType` | ✓ | |  | `type` |  |  |
| `_DeliveryCategory` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DeliveryCategory` | `I_EWM_DeliveryCategory_2` | [0..1] |
| `_Text` | `I_EWM_DeliveryTypeText_2` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warehouse Delivery Type'

@VDM.viewType:#BASIC

@ObjectModel.representativeKey: 'EWMDeliveryDocumentType'
@Analytics.technicalName: 'IEWMDLVTYPE2'
@Analytics:{ dataCategory: #DIMENSION }
@Analytics.internalName:#LOCAL
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #S}

@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE ]

@Metadata.ignorePropagatedAnnotations:true
define view entity I_EWM_DeliveryType_2
  as select from /scdl/tdtype
  association [0..1] to I_EWM_DeliveryCategory_2 as _DeliveryCategory on  $projection.EWMDeliveryDocumentCategory = _DeliveryCategory.EWMDeliveryDocumentCategory
  association [0..*] to I_EWM_DeliveryTypeText_2 as _Text             on  $projection.EWMDeliveryDocumentType     = _Text.EWMDeliveryDocumentType
                                                                      and $projection.EWMDeliveryDocumentCategory = _Text.EWMDeliveryDocumentCategory
{
      @ObjectModel.foreignKey.association: '_DeliveryCategory'
  key category as EWMDeliveryDocumentCategory,
      @ObjectModel.text.association: '_Text'
  key type     as EWMDeliveryDocumentType,
      _DeliveryCategory,
      _Text
}
```
