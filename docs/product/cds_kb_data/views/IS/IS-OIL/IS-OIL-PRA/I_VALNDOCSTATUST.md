---
name: I_VALNDOCSTATUST
description: "Valuation Document Status Name - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALNDOCSTATUST')/$value
semantic_en: "Valuation Document Status Name - Text"
semantic_vi: "Valuation Document Status Name - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "valuation"
  - "document"
  - "status"
  - "name"
  - "text"
  - "language"
tags:
  - IS
  - component:IS-OIL-PRA
  - document
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_VALNDOCSTATUST

**Valuation Document Status Name - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALNDOCSTATUST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ValuationDocumentStatus` | ✓ | |  | `cast (domvalue_l as oiu_doc_status )` | `CHAR(2)` | Valuation Document Status |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `ValuationDocumentStatusName` |  | |  | `cast (ddtext as oiu_vdm_vl_doc_status_name )` | `CHAR(60)` | Valuation Document Status Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALNDOCSTATUST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VALNDOCSTATUST')/$value)*

```abap
@EndUserText.label: 'Valuation Document Status Name - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVVALNDOCSTST'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'ValuationDocumentStatus'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_ValnDocStatusT
  as select from dd07t
{
  key cast (domvalue_l as oiu_doc_status )                as ValuationDocumentStatus,
      @Semantics.language
  key cast( ddlanguage as spras )                         as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_vl_doc_status_name )        as ValuationDocumentStatusName
}
where
      domname  = 'OIU_DOC_STATUS'
  and as4local = 'A';
```
