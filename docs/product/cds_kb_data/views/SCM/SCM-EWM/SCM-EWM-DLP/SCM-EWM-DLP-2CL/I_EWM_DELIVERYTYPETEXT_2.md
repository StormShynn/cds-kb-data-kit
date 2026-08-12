---
name: I_EWM_DELIVERYTYPETEXT_2
description: "Ewm Deliverytypetext 2"
app_component: SCM-EWM-DLP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-DLP
  - interface-view
  - delivery
  - text
  - component:SCM-EWM-DLP-2CL
  - lob:Other
---
# I_EWM_DELIVERYTYPETEXT_2

**Ewm Deliverytypetext 2**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-DLP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` |  |  |
| `EWMDeliveryDocumentType` | ✓ | |  | `type` |  |  |
| `EWMDeliveryDocumentCategory` | ✓ | |  | `category` |  |  |
| `DeliveryTypeName` |  | |  | `description` |  |  |
| `_DeliveryCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DeliveryCategory` | `I_EWM_DeliveryCategory_2` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warehouse Delivery Type - Text'

@VDM.viewType:#BASIC
@ObjectModel.representativeKey: 'EWMDeliveryDocumentType'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IEWMDLVTYPTXT2'
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #M}

@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT,
                                        #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET ]

@Metadata.ignorePropagatedAnnotations:true

define view entity I_EWM_DeliveryTypeText_2
  as select from /scdl/tdtypet as DliveryTypeName
  association [0..1] to I_EWM_DeliveryCategory_2 as _DeliveryCategory on $projection.EWMDeliveryDocumentCategory = _DeliveryCategory.EWMDeliveryDocumentCategory
{
      @Semantics.language: true
  key langu       as Language,
  key type        as EWMDeliveryDocumentType,
      @ObjectModel.foreignKey.association:'_DeliveryCategory'
  key category    as EWMDeliveryDocumentCategory,
      @Semantics.text: true
      description as DeliveryTypeName,
      _DeliveryCategory
}
```
