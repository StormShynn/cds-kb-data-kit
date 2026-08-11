---
name: I_EWM_FIRECONTAINMENTSECTION
description: "Fire Containment Section"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_FIRECONTAINMENTSECTION')/$value
semantic_en: "Fire Containment Section"
semantic_vi: "Fire Containment Section — CDS view giao diện dựa trên Fire Containment Section."
keywords:
  - "fire"
  - "containment"
  - "section"
  - "warehouse"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_FIRECONTAINMENTSECTION

**Fire Containment Section**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_FIRECONTAINMENTSECTION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EWMWarehouse` | ✓ | |  | `lgnum` | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `EWMFireContainmentSection` | ✓ | |  | `brand` | `CHAR(2)` | Fire-Containment Section |
| `_Warehouse` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_Text` | `I_EWM_FireContainmentSctnText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_FIRECONTAINMENTSECTION')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_FIRECONTAINMENTSECTION')/$value)*

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Fire Containment Section'

@VDM.viewType:#BASIC
@Analytics.internalName:#LOCAL
@ObjectModel.representativeKey: 'EWMFireContainmentSection'
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IEWMFIRECNTMSCT'
@ObjectModel.usageType: {serviceQuality: #A,
                         dataClass: #MASTER,
                         sizeCategory: #M}
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@Metadata.ignorePropagatedAnnotations:true
@Metadata.allowExtensions:true 
define view entity I_EWM_FireContainmentSection
  as select from /scwm/t309
  association [0..1] to I_EWM_WarehouseNumber_2       as _Warehouse on  $projection.EWMWarehouse = _Warehouse.EWMWarehouse
  association [0..*] to I_EWM_FireContainmentSctnText as _Text      on  $projection.EWMWarehouse              = _Text.EWMWarehouse
                                                                    and $projection.EWMFireContainmentSection = _Text.EWMFireContainmentSection
{
      @ObjectModel.foreignKey.association: '_Warehouse'
  key lgnum as EWMWarehouse,
      _Warehouse,
      @ObjectModel.text.association: '_Text'
  key brand as EWMFireContainmentSection,
      _Text
}
```
