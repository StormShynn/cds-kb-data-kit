---
name: I_OPSTDWORKQTYGRPGCATTEXT
description: "Operation Grouping Category - Text"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPSTDWORKQTYGRPGCATTEXT')/$value
semantic_en: "Operation Grouping Category - Text"
semantic_vi: "Operation Grouping Category - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "operation"
  - "grouping"
  - "category"
  - "text"
  - "work"
  - "grpg"
  - "language"
  - "name"
tags:
  - PP
  - bo:project
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# I_OPSTDWORKQTYGRPGCATTEXT

**Operation Grouping Category - Text**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPSTDWORKQTYGRPGCATTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OperationStdWorkQtyGrpgCat` | ✓ | |  | `substring(t.domvalue_l, 1, 1)` | `CHAR(1)` |  |
| `Language` | ✓ | |  | `ddlanguage` | `LANG(1)` | Language Key |
| `OperationStdWrkQtyGrpCatName` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPSTDWORKQTYGRPGCATTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OPSTDWORKQTYGRPGCATTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IOPGRPGCATTEXT'
--@AbapCatalog.buffering: {status: #ACTIVE, type: #FULL}
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'OperationStdWorkQtyGrpgCat'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Operation Grouping Category - Text'
@ObjectModel.sapObjectNodeType.name: 'BOOOpStdWorkQtyGrpCatText'
@Analytics.dataExtraction.enabled: true


/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view I_OpStdWorkQtyGrpgCatText
  as select from dd07t as t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: 'OperationStdWrkQtyGrpCatName'
  key substring(t.domvalue_l, 1, 1) as OperationStdWorkQtyGrpgCat,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key t.ddlanguage                  as Language,
      @Semantics.text: true
      t.ddtext                      as OperationStdWrkQtyGrpCatName,

      // Associations
      _Language
}
where
      t.domname  = 'VERDART'
  and t.as4local = 'A'
  and t.as4vers  = '0000';
```
