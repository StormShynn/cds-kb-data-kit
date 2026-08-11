---
name: I_PRAACCOUNTINGDOCSTATUST
description: "PRA Accounting Document Status - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCOUNTINGDOCSTATUST')/$value
semantic_en: "PRA Accounting Document Status - Text"
semantic_vi: "PRA Accounting Document Status - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "pra"
  - "accounting"
  - "document"
  - "status"
  - "text"
  - "language"
  - "name"
tags:
  - IS
  - account
  - bo:journalentry
  - component:IS-OIL-PRA
  - document
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_PRAACCOUNTINGDOCSTATUST

**PRA Accounting Document Status - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCOUNTINGDOCSTATUST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountingDocumentStatus` | ✓ | |  | `cast (domvalue_l as /pra/acct_doc_status )` | `CHAR(2)` | Accounting Document Status |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `AccountingDocumentStatusName` |  | |  | `cast (ddtext as oiu_vdm_acctg_doc_status_nm )` | `CHAR(60)` | Acctg Doc Status Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCOUNTINGDOCSTATUST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCOUNTINGDOCSTATUST')/$value)*

```abap
@EndUserText.label: 'PRA Accounting Document Status - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVACTGDSATUST'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'AccountingDocumentStatus'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_PRAAccountingDocStatusT
  as select from dd07t
{
  key cast (domvalue_l as /pra/acct_doc_status )                  as AccountingDocumentStatus,
      @Semantics.language
  key cast( ddlanguage as spras )                                 as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_acctg_doc_status_nm )               as AccountingDocumentStatusName
}
where
      domname  = '/PRA/ACCT_DOC_STATUS'
  and as4local = 'A';
```
