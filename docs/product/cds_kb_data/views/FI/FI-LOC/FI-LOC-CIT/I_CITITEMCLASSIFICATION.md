---
name: I_CITITEMCLASSIFICATION
description: "Cititemclassification"
app_component: FI-LOC-CIT
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-CIT
  - interface-view
  - classification
  - item-level
  - component:FI-LOC-CIT
  - lob:Finance
---
# I_CITITEMCLASSIFICATION

**Cititemclassification**

| Property | Value |
|---|---|
| App Component | `FI-LOC-CIT` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CITClassificationUUID` | ✓ | |  | `uuid` |  |  |
| `SourceLedger` |  | |  | `sourceledger` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `FiscalYear` |  | |  | `gjahr` |  |  |
| `AccountingDocument` |  | |  | `belnr` |  |  |
| `LedgerGLLineItem` |  | |  | `docln` |  |  |
| `Ledger` |  | |  | `ledger` |  |  |
| `CITReportingDate` |  | |  | `repdate` |  |  |
| `CorporateIncomeTaxHierarchy` |  | |  | `hryid` |  |  |
| `CITClassificationCode` |  | |  | `clsfcode` |  |  |
| `CITItemAmountInDisplayCurrency` |  | |  | `amount` |  |  |
| `Currency` |  | |  | `currency` |  |  |
| `ReferenceDocument` |  | |  | `awref` |  |  |
| `BalanceCarryforwardStatus` |  | |  | `bcf` |  |  |
| `CreationDateTime` |  | |  | `cast(created_at as creation_date_time preserving type )` |  |  |
| `CreatedByUserName` |  | |  | `cast (created_by as cruser preserving type )` |  |  |
| `ChangedDateTime` |  | |  | `cast (changed_at as last_changed_date_time preserving type )` |  |  |
| `LastChangedByUserName` |  | |  | `cast (changed_by as last_changed_by_user preserving type )` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_CITItemClassification` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICITITEMCLFN'
@VDM.viewType: #BASIC
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'CIT Item Classification'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.sapObjectNodeType.name: 'CITItemClassification'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]

define view I_CITItemClassification
  as select from ficitd_classify
  
  association [1..1] to E_CITItemClassification as _Extension //do not expose this association in the projection list of the view
         on $projection.CITClassificationUUID = _Extension.CITClassificationUUID

{

  key uuid                                                         as CITClassificationUUID,
      sourceledger                                                 as SourceLedger,
      bukrs                                                        as CompanyCode,
      gjahr                                                        as FiscalYear,
      belnr                                                        as AccountingDocument,
      docln                                                        as LedgerGLLineItem,
      ledger                                                       as Ledger,
      repdate                                                      as CITReportingDate,
      hryid                                                        as CorporateIncomeTaxHierarchy,
      clsfcode                                                     as CITClassificationCode,
      @Semantics.amount.currencyCode: 'Currency'
      amount                                                       as CITItemAmountInDisplayCurrency,
      @Semantics.currencyCode: true
      currency                                                     as Currency,
      awref                                                        as ReferenceDocument,
      bcf                                                          as BalanceCarryforwardStatus,
      @Semantics.systemDateTime.createdAt: true
      cast(created_at as creation_date_time preserving type )      as CreationDateTime,
      @Semantics.user.createdBy: true
      cast (created_by as cruser preserving type )                 as CreatedByUserName,
      @Semantics.systemDateTime.lastChangedAt: true
      cast (changed_at as last_changed_date_time preserving type ) as ChangedDateTime,
      @Semantics.user.lastChangedBy: true
      cast (changed_by as last_changed_by_user preserving type )   as LastChangedByUserName
}
```
