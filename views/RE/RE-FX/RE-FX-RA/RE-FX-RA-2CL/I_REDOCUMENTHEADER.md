---
name: I_REDOCUMENTHEADER
description: Redocumentheader
app_component: RE-FX-RA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-RA
  - interface-view
  - document
  - header-level
  - component:RE-FX-RA-2CL
  - lob:Other
---
# I_REDOCUMENTHEADER

**Redocumentheader**

| Property | Value |
|---|---|
| App Component | `RE-FX-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RealEstateDocumentUUID` | ✓ | |  | `docguid` |  |  |
| `REProcessUUID` |  | |  | `processguid` |  |  |
| `RealEstateProcess` |  | |  | `cast(processid as recavdmprocessid preserving type )` |  |  |
| `FiscalYear` |  | |  | `fisc_year` |  |  |
| `PostingDate` |  | |  | `pstngdate` |  |  |
| `DocumentDate` |  | |  | `docdate` |  |  |
| `OriginalReferenceDocument` |  | |  | `refdocid` |  |  |
| `LogicalSystem` |  | |  | `logsystem` |  |  |
| `REDocumentReversalStatus` |  | |  | `revid` |  |  |
| `REReversalDocumentUUID` |  | |  | `revdocguid` |  |  |
| `CreatedByUser` |  | |  | `rerf` |  |  |
| `CreationDate` |  | |  | `derf` |  |  |
| `CreationTime` |  | |  | `terf` |  |  |
| `RESourceOfCreation` |  | |  | `reher` |  |  |
| `LastChangedByUser` |  | |  | `rbear` |  |  |
| `LastChangeDate` |  | |  | `dbear` |  |  |
| `LastChangeTime` |  | |  | `tbear` |  |  |
| `RESourceOfChange` |  | |  | `rbher` |  |  |
| `RECurrencyTranslationRule` |  | |  | `ctrule` |  |  |
| `REIsPostInConditionCurrency` |  | |  | `postcdcurr` |  |  |
| `REPlndTranslationDate` |  | |  | `ctdatereq` |  |  |
| `REActlTranslationDate` |  | |  | `ctdateact` |  |  |
| `ForeignCurrency` |  | |  | `ctfccurrkey` |  |  |
| `REValuationRule` |  | |  | `cerule` |  |  |
| `AccountingPrinciple` |  | |  | `accprinciple` |  |  |
| `_REProcess` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_ChangedByUser` | | ✓ | | | | |
| `_AccountingDocument` | | ✓ | | | | |
| `_AccountingPrinciple` | | ✓ | | | | |
| `_RECurrencyTranslationRule` | | ✓ | | | | |
| `_REValuationRule` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REProcess` | `I_REProcess` | [1..*] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_ChangedByUser` | `I_User` | [0..1] |
| `_AccountingDocument` | `I_AccountingDocument` | [0..1] |
| `_AccountingPrinciple` | `I_AccountingPrinciple` | [0..1] |
| `_RECurrencyTranslationRule` | `I_RECurrencyTranslationRule` | [0..1] |
| `_REValuationRule` | `I_REValuationRule` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREDOCHEAD'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Document Header'
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL
}
@ObjectModel: {
  representativeKey: 'RealEstateDocumentUUID',
  usageType: {
    dataClass: #MIXED,
    serviceQuality: #C,
    sizeCategory: #L
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION, 
    #CDS_MODELING_ASSOCIATION_TARGET
  ]
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC

define view entity I_REDocumentHeader
  as select from viradoc

  association [1..*] to I_REProcess                 as _REProcess                 on $projection.REProcessUUID              = _REProcess.REProcessUUID
  association [0..1] to I_User                      as _CreatedByUser             on  $projection.CreatedByUser             = _CreatedByUser.UserID
  association [0..1] to I_User                      as _ChangedByUser             on  $projection.LastChangedByUser         = _ChangedByUser.UserID
  association [0..1] to I_AccountingDocument        as _AccountingDocument        on  $projection.OriginalReferenceDocument = _AccountingDocument.OriginalReferenceDocument
                                                                                  and $projection.FiscalYear                = _AccountingDocument.FiscalYear
  association [0..1] to I_AccountingPrinciple       as _AccountingPrinciple       on  $projection.AccountingPrinciple       = _AccountingPrinciple.AccountingPrinciple

  association [0..1] to I_RECurrencyTranslationRule as _RECurrencyTranslationRule on  $projection.RECurrencyTranslationRule = _RECurrencyTranslationRule.RECurrencyTranslationRule
  association [0..1] to I_REValuationRule           as _REValuationRule           on  $projection.REValuationRule           = _REValuationRule.REValuationRule

{
  key docguid      as RealEstateDocumentUUID,
      //PSTNGPROCEDURE
      //PROCESS
      processguid  as REProcessUUID,
      cast(processid as recavdmprocessid preserving type )       as RealEstateProcess,
      fisc_year    as FiscalYear,
      //PSTNGPERIOD
      pstngdate    as PostingDate,
      docdate      as DocumentDate,
      //ACCSYSTYPE
      //      @ObjectModel.foreignKey.association: '_AccountingDocument'
      refdocid     as OriginalReferenceDocument,
      logsystem    as LogicalSystem,
      revid        as REDocumentReversalStatus,
      revdocguid   as REReversalDocumentUUID,
      //STATUS
      //TAXID
      //HASGLACCSYMB
      //REFERENCEDOCGUID
      //      @ObjectModel.foreignKey.association: '_CreatedByUser'
      rerf         as CreatedByUser,
      derf         as CreationDate,
      terf         as CreationTime,
      reher        as RESourceOfCreation,
      //      @ObjectModel.foreignKey.association: '_ChangedByUser'
      rbear        as LastChangedByUser,
      dbear        as LastChangeDate,
      tbear        as LastChangeTime,
      rbher        as RESourceOfChange,
      //FDELETE
      @ObjectModel.foreignKey.association: '_RECurrencyTranslationRule'
      ctrule       as RECurrencyTranslationRule,
      //CTRATE
      postcdcurr   as REIsPostInConditionCurrency,
      ctdatereq    as REPlndTranslationDate,
      ctdateact    as REActlTranslationDate,
      ctfccurrkey  as ForeignCurrency,
      //DOCSTATUS
      //SECONDDOCGUID
      //SPLITDOCGUID
      @ObjectModel.foreignKey.association: '_REValuationRule'
      cerule       as REValuationRule,
      @ObjectModel.foreignKey.association: '_AccountingPrinciple'
      accprinciple as AccountingPrinciple,
      //CEDOCTYPE


      _REProcess,
      _CreatedByUser,
      _ChangedByUser,
      _AccountingDocument,
      _AccountingPrinciple,

      _RECurrencyTranslationRule,
      _REValuationRule

}
```
