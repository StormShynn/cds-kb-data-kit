---
name: I_EWM_PHYSICALINVENTORYDOCTYPE
description: "Warehouse Physical Inventory Procedure"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PHYSICALINVENTORYDOCTYPE')/$value
semantic_en: "Warehouse Physical Inventory Procedure"
semantic_vi: "Warehouse Physical Inventory Procedure — CDS view giao diện dựa trên Warehouse Physical Inventory Procedure."
keywords:
  - "warehouse"
  - "physical"
  - "inventory"
  - "procedure"
  - "document"
  - "type"
  - "phys"
  - "process"
  - "category"
tags:
  - SCM
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - inventory
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_PHYSICALINVENTORYDOCTYPE

**Warehouse Physical Inventory Procedure**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PHYSICALINVENTORYDOCTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PhysicalInventoryDocumentType` | ✓ | |  | `doc_type` | `CHAR(2)` | Physical Inventory Procedure (Document Type of Phys. Inv.) |
| `PhysInventoryProcessCategory` |  | |  | `category` | `CHAR(1)` | Physical Inventory Process Category |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_EWM_PInvProcedureText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PHYSICALINVENTORYDOCTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PHYSICALINVENTORYDOCTYPE')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Warehouse Physical Inventory Procedure'

@VDM.viewType:#BASIC

@ObjectModel.representativeKey: 'PhysicalInventoryDocumentType'
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IEWMPIDOCTYP'
@Analytics.internalName: #LOCAL
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #CUSTOMIZING,
                         sizeCategory: #S}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
             #SQL_DATA_SOURCE,
             #CDS_MODELING_DATA_SOURCE,
             #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION                         
@Metadata.ignorePropagatedAnnotations:true
define view entity I_EWM_PhysicalInventoryDocType
  as select from /lime/pi_doctype
  association [0..*] to I_EWM_PInvProcedureText as _Text on $projection.PhysicalInventoryDocumentType = _Text.PhysicalInventoryDocumentType
{
      @ObjectModel.text.association: '_Text'
  key doc_type as PhysicalInventoryDocumentType,
      category as PhysInventoryProcessCategory,
      _Text
}
```
