---
name: I_CNDNCONTRCLASSFCTNTYPE
description: "This CDS view exposes values of the Condition Contract Classification Type and the Condition Contract Category."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRCLASSFCTNTYPE')/$value
semantic_en: "This CDS view exposes values of the Condition Contract Classification Type and the Condition Contract Category."
semantic_vi: "Condition Contract Classification Type — CDS view cơ bản dựa trên twcbcategory."
keywords:
  - "condition"
  - "contract"
  - "classification"
  - "type"
  - "cndn"
  - "contr"
  - "classfctn"
  - "process"
  - "category"
tags:
  - LO
  - bo:companycode
  - component:LO-GT-CHB
  - contract
  - interface-view
  - LO-GT
  - LO-GT-CHB
  - lob:logistics general
---
# I_CNDNCONTRCLASSFCTNTYPE

**This CDS view exposes values of the Condition Contract Classification Type and the Condition Contract Category.**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRCLASSFCTNTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CndnContrClassfctnType` | ✓ | |  | `category` | `CHAR(2)` | Condition Contract Category |
| `CndnContrProcessCategory` |  | |  | `process_category` | `CHAR(2)` | Process Category of a Condition Contract |
| `_CndnContrProcessCategory` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CndnContrProcessCategory` | `I_CndnContrProcessCategory` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRCLASSFCTNTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CNDNCONTRCLASSFCTNTYPE')/$value)*

```abap
@EndUserText.label: 'Condition Contract Classification Type'
@AbapCatalog.entityBuffer.definitionAllowed: true
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@ObjectModel: {
   sapObjectNodeType.name: 'CndnContrClassificationType',
   dataCategory: #VALUE_HELP,
   modelingPattern: #ANALYTICAL_DIMENSION,
   representativeKey: 'CndnContrClassfctnType',
   supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                            #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #ANALYTICAL_DIMENSION,
                            #EXTRACTION_DATA_SOURCE ],
   
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #A,
     sizeCategory:   #S
   },
   resultSet.sizeCategory: #XS
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Search.searchable: true
@Analytics: {
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true,
  internalName: #LOCAL,
  technicalName: 'ICCCLASSFCTNTY'
}
@Metadata: {
  ignorePropagatedAnnotations: true
}

define root view entity I_CndnContrClassfctnType
  as select from twcbcategory as CndnContrClassfctnType

  composition [0..*] of I_CndnContrClassfctnTypeText as _Text
  association [0..1] to I_CndnContrProcessCategory   as _CndnContrProcessCategory on $projection.CndnContrProcessCategory = _CndnContrProcessCategory.CndnContrProcessCategory
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
  key CndnContrClassfctnType.category         as CndnContrClassfctnType,
      @ObjectModel.foreignKey.association: '_CndnContrProcessCategory'
      CndnContrClassfctnType.process_category as CndnContrProcessCategory,

      /*Associations*/
      _Text,
      _CndnContrProcessCategory
}
```
