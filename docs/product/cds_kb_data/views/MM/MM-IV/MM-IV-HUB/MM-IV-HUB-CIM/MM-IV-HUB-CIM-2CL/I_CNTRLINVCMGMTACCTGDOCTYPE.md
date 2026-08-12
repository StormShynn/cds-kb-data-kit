---
name: I_CNTRLINVCMGMTACCTGDOCTYPE
description: "Cntrlinvcmgmtacctgdoctype"
app_component: MM-IV-HUB-CIM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IV
  - MM-IV-HUB
  - interface-view
  - component:MM-IV-HUB-CIM-2CL
  - lob:Sourcing & Procurement
---
# I_CNTRLINVCMGMTACCTGDOCTYPE

**Cntrlinvcmgmtacctgdoctype**

| Property | Value |
|---|---|
| App Component | `MM-IV-HUB-CIM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountingDocumentType` | ✓ | |  | `cast(DocumentTypeText.AccountingDocumentType as cimic_accounting_document_type)` |  |  |
| `LanguageISOCode` | ✓ | |  | `cast(DocumentTypeText._Language.LanguageISOCode as cimic_nte_langu)` |  |  |
| `AccountingDocumentTypeName` |  | |  | `cast(DocumentTypeText.AccountingDocumentTypeName as cimic_acct_document_type_name)` |  |  |
| `AssetAccountPostingIsAllowed` |  | |  | `cast(t003.xkoaa as cimic_posting_to_asset_account )` |  |  |
| `MatlAcctPostingIsAllowed` |  | |  | `cast(t003.xkoam as cimic_posting_to_material_acct )` |  |  |
| `GLAccountPostingIsAllowed` |  | |  | `cast(t003.xkoas as cimic_posting_to_gl_account )` |  |  |
| `AuthorizationGroup` |  | |  | `brgru` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICIMACCTGDOCTYPE'
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Accounting Document Type for Import'
@VDM.viewType: #BASIC
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #B,
  sizeCategory: #S
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.supportedCapabilities:[#CDS_MODELING_DATA_SOURCE,#SQL_DATA_SOURCE]
@ObjectModel.modelingPattern:#NONE
define view I_CntrlInvcMgmtAcctgDocType
  as select from I_AccountingDocumentTypeText as DocumentTypeText
    inner join   t003 on DocumentTypeText.AccountingDocumentType = t003.blart
{

  key  cast(DocumentTypeText.AccountingDocumentType as cimic_accounting_document_type)    as AccountingDocumentType,
  key  cast(DocumentTypeText._Language.LanguageISOCode as cimic_nte_langu)                as LanguageISOCode,
       @Semantics.text:true
       cast(DocumentTypeText.AccountingDocumentTypeName as cimic_acct_document_type_name) as AccountingDocumentTypeName,
       cast(t003.xkoaa as cimic_posting_to_asset_account )                                as AssetAccountPostingIsAllowed,
       cast(t003.xkoam as cimic_posting_to_material_acct )                                as MatlAcctPostingIsAllowed,
       cast(t003.xkoas as cimic_posting_to_gl_account )                                   as GLAccountPostingIsAllowed,
       t003.brgru                                                                         as AuthorizationGroup
}
```
