---
name: I_TRANSPCHARGEINSTRNTYPETEXT
description: Transpchargeinstrntypetext
app_component: TM-MD-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - TM
  - TM-MD
  - TM-MD-CM
  - interface-view
  - text-view
  - text
  - component:TM-MD-CM-2CL
  - lob:Other
---
# I_TRANSPCHARGEINSTRNTYPETEXT

**Transpchargeinstrntypetext**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `TranspChargeInstrnType` | ✓ | |  | `cast(substring(domvalue_l, 1, 6) as /scmtms/trcharg_clc_res_instr preserving type)` |
| `Language` | ✓ | |  | `ddlanguage` |
| `TranspChargeInstrnTypeDesc` |  | |  | `cast(ddtext as /scmtms/vdm_tcm_instrn_typt preserving type)` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_Language` | | ✓ | | |
| `_TranspChargeInstrnType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl: {authorizationCheck: #NOT_REQUIRED}
@Analytics.technicalName: 'IINSTRUCTTYPET'
@EndUserText:   {label: 'Transp Charges Instruction Type - Text'}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:   {representativeKey:  'TranspChargeInstrnType',
                 dataCategory:       #TEXT,
                 modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                 usageType:          {serviceQuality: #A,
                                      sizeCategory:   #S,
                                      dataClass:      #META},
                 supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #LANGUAGE_DEPENDENT_TEXT,
                                         #SEARCHABLE_ENTITY,
                                         #SQL_DATA_SOURCE]}
@Search.searchable: true
@VDM:           {viewType:                #BASIC,
                 lifecycle.contract.type: #PUBLIC_LOCAL_API }

define view entity I_TranspChargeInstrnTypeText
  as select from dd07t
  association        to parent I_TranspChargeInstrnType as _TranspChargeInstrnType on $projection.TranspChargeInstrnType = _TranspChargeInstrnType.TranspChargeInstrnType
  association [0..1] to I_Language                           as _Language               on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TranspChargeInstrnType'
  key cast(substring(domvalue_l, 1, 6) as /scmtms/trcharg_clc_res_instr preserving type) as TranspChargeInstrnType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key ddlanguage                                                                         as Language,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(ddtext as /scmtms/vdm_tcm_instrn_typt preserving type)                        as TranspChargeInstrnTypeDesc,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                                   as DomainValue,

      /* Associations */
      _TranspChargeInstrnType,
      _Language
}
where
      domname  = '/SCMTMS/TCC_CLC_RES_INSTR'
  and as4local = 'A';
```
