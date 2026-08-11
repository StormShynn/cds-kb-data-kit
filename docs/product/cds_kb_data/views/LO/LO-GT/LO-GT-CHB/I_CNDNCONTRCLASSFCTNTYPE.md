---
name: I_CNDNCONTRCLASSFCTNTYPE
description: "This CDS view exposes values of the Condition Contract Classification Type and the Condition Contract Category."
app_component: LO-GT-CHB
software_component: SAPSCORE
release_state: released
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
