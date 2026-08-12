---
name: I_CRDTDECISIONDOCUMENTCATEGORY
description: "This CDS view is designed to provide language-dependent text descriptions for categories of credit decision documents. It links credit decision document categories with their respective text descriptions in different languages, facilitating multilingual support for credit decision documentation. This CDS view provides the data to answer the following business questions: What are the text descriptions for different categories of credit decision documents in various languages? How can I retrieve the language-specific name for a given credit decision document category? Which languages are supported for the text descriptions of credit decision document categories? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDECISIONDOCUMENTCATEGORY')/$value
semantic_en: "This CDS view is designed to provide language-dependent text descriptions for categories of credit decision documents. It links credit decision document categories with their respective text descriptions in different languages, facilitating multilingual support for credit decision documentation. This CDS view provides the data to answer the following business questions: What are the text descriptions for different categories of credit decision documents in various languages? How can I retrieve the language-specific name for a given credit decision document category? Which languages are supported for the text descriptions of credit decision document categories? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Category of a documented credit decision — CDS view cơ bản dựa trên ukm_dcdcategory."
keywords:
  - "category"
  - "documented"
  - "credit"
  - "decision"
  - "document"
tags:
  - FIN
  - bo:companycode
  - component:FIN-FSCM-CR-2CL
  - document
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
---
# I_CRDTDECISIONDOCUMENTCATEGORY

**This CDS view is designed to provide language-dependent text descriptions for categories of credit decision documents. It links credit decision document categories with their respective text descriptions in different languages, facilitating multilingual support for credit decision documentation. This CDS view provides the data to answer the following business questions: What are the text descriptions for different categories of credit decision documents in various languages? How can I retrieve the language-specific name for a given credit decision document category? Which languages are supported for the text descriptions of credit decision document categories? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDECISIONDOCUMENTCATEGORY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditDecisionDocumentCategory` | ✓ | |  | `category` | `CHAR(4)` | Category of the Documented Credit Decision |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CrdtDcsnDocumentCategoryText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDECISIONDOCUMENTCATEGORY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTDECISIONDOCUMENTCATEGORY')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Category of a documented credit decision'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { usageType:{ serviceQuality: #A,
                            sizeCategory: #S,
                            dataClass: #CUSTOMIZING },
                representativeKey: 'CreditDecisionDocumentCategory',
                supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ],
                modelingPattern: #NONE }
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC }
@Analytics.technicalName: 'IDCDCategory'
define view entity I_CrdtDecisionDocumentCategory
  as select from ukm_dcdcategory
  association [0..*] to I_CrdtDcsnDocumentCategoryText as _Text on $projection.CreditDecisionDocumentCategory = _Text.CreditDecisionDocumentCategory
{
       @ObjectModel.text.association: '_Text'
  key  category as CreditDecisionDocumentCategory,
       _Text
}
```
