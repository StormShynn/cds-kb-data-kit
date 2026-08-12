---
name: I_CACASHSECURITYDEPOSITSTSTEXT
description: "Cacashsecuritydepositststext"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - text-view
  - text
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CACASHSECURITYDEPOSITSTSTEXT

**Cacashsecuritydepositststext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CACashSecurityDepositStatus` | ✓ | |  | `cast( left(dd07t.domvalue_l,2 ) as c_status_kk )` |  |  |
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |  |  |
| `CACashSecurityDepositStatusTxt` |  | |  | `cast( ddtext as c_status_text_kk )` |  |  |
| `_CashSecurityDepositStatus` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CashSecurityDepositStatus` | `I_CACashSecurityDepositStatus` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'ICACASHSDSTST'

@EndUserText.label: 'Cash Security Deposit Status - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CACashSecurityDepositStatus',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #B,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CACashSecurityDepositStsText
  as select from dd07t

  association [1..1] to I_CACashSecurityDepositStatus as _CashSecurityDepositStatus on $projection.CACashSecurityDepositStatus = _CashSecurityDepositStatus.CACashSecurityDepositStatus
  association [0..1] to I_Language                    as _Language                  on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CashSecurityDepositStatus'
  key cast( left(dd07t.domvalue_l,2 ) as c_status_kk ) as CACashSecurityDepositStatus,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( ddlanguage as spras preserving type )      as Language,

      @Semantics.text: true
      cast( ddtext as c_status_text_kk )               as CACashSecurityDepositStatusTxt,

      _CashSecurityDepositStatus,
      _Language
}
where
      dd07t.domname  = 'C_STATUS_KK'
  and dd07t.as4local = 'A'
```
