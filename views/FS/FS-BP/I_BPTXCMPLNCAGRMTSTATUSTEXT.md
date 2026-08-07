---
name: I_BPTXCMPLNCAGRMTSTATUSTEXT
description: Bptxcmplncagrmtstatustext
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FS
  - FS-BP
  - interface-view
  - text-view
  - text
  - status
  - component:FS-BP
  - lob:Other
---
# I_BPTXCMPLNCAGRMTSTATUSTEXT

**Bptxcmplncagrmtstatustext**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `BPTaxComplianceAgreementStatus` | ✓ | |  | `cast ( dd07t.domvalue_l as fsbp_taxc_agree_status )` |  |  |
| `BPTxCmplncAgrmtStatusDesc` |  | |  | `ddtext` |  |  |
| `_BPTxCmplncAgreementStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BPTxCmplncAgreementStatus` | `I_BPTxCmplncAgreementStatus` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Tax Compliance: Agreement Status - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { dataCategory: #TEXT,
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S
                           },
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'BPTaxComplianceAgreementStatus'
}
@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_BPTxCmplncAgrmtStatusText
  as select from dd07t
  association [0..1] to I_BPTxCmplncAgreementStatus as _BPTxCmplncAgreementStatus on $projection.BPTaxComplianceAgreementStatus = _BPTxCmplncAgreementStatus.BPTaxComplianceAgreementStatus
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language

{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key dd07t.ddlanguage                        as Language,

      @ObjectModel.text.element: ['BPTxCmplncAgrmtStatusDesc']
      @ObjectModel.foreignKey.association: '_BPTxCmplncAgreementStatus'
  key cast ( dd07t.domvalue_l as fsbp_taxc_agree_status ) as BPTaxComplianceAgreementStatus,
      @Semantics.text: true
      dd07t.ddtext                            as BPTxCmplncAgrmtStatusDesc,

      _BPTxCmplncAgreementStatus,
      _Language
}
where
      dd07t.domname  = 'FSBP_TAXC_AGREE_STATUS'
  and dd07t.as4local = 'A'
```
