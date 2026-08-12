---
name: I_FUNCTIONALLOCATIONCATEGORY
description: "Functionallocationcategory"
app_component: PM-EQM-FL-2CL
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
  - PM
  - PM-EQM
  - PM-EQM-FL
  - interface-view
  - component:PM-EQM-FL-2CL
  - lob:Plant Maintenance
---
# I_FUNCTIONALLOCATIONCATEGORY

**Functionallocationcategory**

| Property | Value |
|---|---|
| App Component | `PM-EQM-FL-2CL` |
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
| `FunctionalLocationCategory` | ✓ | |  | `fltyp` |  |  |
| `TechObjInspectionLevelCode` |  | |  | `idms_type` |  |  |
| `FunctionalLocationCategoryOID` |  | |  | `cast( t370f.fltyp as functionallocationcategory_oid )` |  |  |
| `_Text` | | ✓ | | | | |
| `_InspectionLevelText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FlocCategoryText` | [0..*] |
| `_InspectionLevelText` | `I_TechObjInspectionLevelText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Functional Location Category'
@Analytics: { dataCategory: #DIMENSION,
  dataExtraction : { enabled: true ,
  delta.changeDataCapture.automatic: true }
}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFLOCCATTXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck:#CHECK
@ObjectModel.representativeKey: 'FunctionalLocationCategory'
@ObjectModel.semanticKey:  [ 'FunctionalLocationCategory' ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.alternativeKey:[{id:'OID',element:['FunctionalLocationCategoryOID']}] //use your own OID field
@ObjectModel.sapObjectNodeType.name:'FunctionalLocationCategory' //use your own SOT = ODM Entity name
@ObjectModel.objectIdentifier.oidElement:'FunctionalLocationCategoryOID' //use your OID field

define view I_FunctionalLocationCategory
  as select from           t370f // T370F = Functional Location Category
  association [0..*] to I_FlocCategoryText           as _Text                on _Text.FunctionalLocationCategory = $projection.FunctionalLocationCategory
  association [0..*] to I_TechObjInspectionLevelText as _InspectionLevelText on _InspectionLevelText.TechObjInspectionLevelCode = $projection.TechObjInspectionLevelCode
{
      @ObjectModel.text.association: '_Text'
  key t370f.fltyp     as FunctionalLocationCategory,

      @ObjectModel.text.association: '_InspectionLevelText'
      t370f.idms_type as TechObjInspectionLevelCode,

      //MDI/ODM
      @ObjectModel.filter.enabled:false
      @ObjectModel.sort.enabled:false
      cast( t370f.fltyp as functionallocationcategory_oid ) as FunctionalLocationCategoryOID, //use your own OID field name

      // Propagate association
      _Text,
      _InspectionLevelText
}
```
