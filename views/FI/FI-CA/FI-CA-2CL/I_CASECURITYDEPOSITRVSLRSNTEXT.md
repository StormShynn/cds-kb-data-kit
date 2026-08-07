---
name: I_CASECURITYDEPOSITRVSLRSNTEXT
description: "Casecuritydepositrvslrsntext"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
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
# I_CASECURITYDEPOSITRVSLRSNTEXT

**Casecuritydepositrvslrsntext**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CASecurityDepositReversalRsn` | ✓ | |  | `rev_reason` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `CASecurityDepositRvslRsnText` |  | |  | `cast( text as rev_reason_txt_kk )` |  |  |
| `_CASecurityDepositReversalRsn` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CASecurityDepositReversalRsn` | `I_CASecurityDepositReversalRsn` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'ICASECDPRVSLRSNT'

@EndUserText.label: 'Security Deposit Reversal Reason - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CASecurityDepositReversalRsn',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #B,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CASecurityDepositRvslRsnText
  as select from tfk_sec_rev_t

  association [1..1] to I_CASecurityDepositReversalRsn as _CASecurityDepositReversalRsn on $projection.CASecurityDepositReversalRsn = _CASecurityDepositReversalRsn.CASecurityDepositReversalRsn
  association [0..1] to I_Language                     as _Language                     on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CASecurityDepositReversalRsn'
  key rev_reason                        as CASecurityDepositReversalRsn,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras                             as Language,

      @Semantics.text
      cast( text as rev_reason_txt_kk ) as CASecurityDepositRvslRsnText,

      _Language,
      _CASecurityDepositReversalRsn
}
```
