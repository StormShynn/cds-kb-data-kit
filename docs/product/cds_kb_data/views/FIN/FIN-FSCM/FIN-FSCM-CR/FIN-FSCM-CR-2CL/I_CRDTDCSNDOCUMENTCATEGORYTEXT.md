---
name: I_CRDTDCSNDOCUMENTCATEGORYTEXT
description: "Category of credit decision - Txt"
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNDOCUMENTCATEGORYTEXT')/$value
semantic_en: "Category of credit decision - Txt"
semantic_vi: "Category of credit decision - Txt — CDS view cơ bản dựa trên ukm_dcdcategoryt."
keywords:
  - "category"
  - "credit"
  - "decision"
  - "txt"
  - "language"
  - "document"
  - "crdt"
  - "dcsn"
  - "name"
tags:
  - FIN
  - component:FIN-FSCM-CR-2CL
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
---
# I_CRDTDCSNDOCUMENTCATEGORYTEXT

**Category of credit decision - Txt**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNDOCUMENTCATEGORYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `CreditDecisionDocumentCategory` | ✓ | |  | `category` | `CHAR(4)` | Category of the Documented Credit Decision |
| `CrdtDcsnDocumentCategoryName` |  | |  | `category_text` | `CHAR(40)` | Name of Category of the Documented Credit Decision |
| `_Language` | | ✓ | | | | |
| `_Category` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNDOCUMENTCATEGORYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDCSNDOCUMENTCATEGORYTEXT')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Category of credit decision - Txt'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { usageType:{ serviceQuality: #A,
                            sizeCategory: #S,
                            dataClass: #CUSTOMIZING },
                dataCategory: #TEXT,
                representativeKey: 'CreditDecisionDocumentCategory',
                supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT }
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC }
@Analytics.technicalName: 'IDCDCategoryTxt'
define view entity I_CrdtDcsnDocumentCategoryText
  as select from ukm_dcdcategoryt
  association [0..1] to I_Language                         as _Language on $projection.Language = _Language.Language
  association of one to one I_CrdtDecisionDocumentCategory as _Category on $projection.CreditDecisionDocumentCategory = _Category.CreditDecisionDocumentCategory
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key langu         as Language,
      @ObjectModel.foreignKey.association: '_Category'
      @ObjectModel.text.element: ['CrdtDcsnDocumentCategoryName']
  key category      as CreditDecisionDocumentCategory,
      @Semantics.text: true
      category_text as CrdtDcsnDocumentCategoryName,
      _Language,
      _Category
}
```
