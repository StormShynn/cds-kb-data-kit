---
name: I_CNTRLINVCMGMTACCTGDOCTYPE
description: Cntrlinvcmgmtacctgdoctype
app_component: MM-IV-HUB-CIM-2CL
software_component: SAPSCORE
release_state: released
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
