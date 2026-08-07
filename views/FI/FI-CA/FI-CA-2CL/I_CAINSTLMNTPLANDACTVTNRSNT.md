---
name: I_CAINSTLMNTPLANDACTVTNRSNT
description: Cainstlmntplandactvtnrsnt
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
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAINSTLMNTPLANDACTVTNRSNT

**Cainstlmntplandactvtnrsnt**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CAInstlmntPlanDactvtnRsn` | ✓ | |  | `deagd` |
| `Language` | ✓ | |  | `spras` |
| `CAInstlmntPlanDactvtnRsnName` |  | |  | `rpctxt` |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Installment Plan Deactivation Rsn - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { dataCategory: #TEXT,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                representativeKey: 'CAInstlmntPlanDactvtnRsn',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CAInstlmntPlanDactvtnRsnT
  as select from tfk061at

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key deagd  as CAInstlmntPlanDactvtnRsn,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras  as Language,

      @Semantics.text
      rpctxt as CAInstlmntPlanDactvtnRsnName,

      _Language
}
```
