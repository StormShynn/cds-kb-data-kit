---
name: I_OPTIONSETTLEMENTTYPETEXT
description: "Optionsettlementtypetext"
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - text-view
  - text
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_OPTIONSETTLEMENTTYPETEXT

**Optionsettlementtypetext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OptionSettlementType` | ✓ | |  | `cast(DomainText.domvalue_l as option_settlement_type)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `OptionSettlementTypeName` |  | |  | `cast(DomainText.ddtext as option_settlement_type_name preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IOPTIONSETTYPET'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Option settlement type - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@ObjectModel:{
    dataCategory: #TEXT,
    usageType : {
        sizeCategory: #S,
        serviceQuality: #X,
        dataClass: #MIXED
    },
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE],
    modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
    representativeKey: 'OptionSettlementType',
    sapObjectNodeType.name: 'FinTransOptnSettlementTypeText'
}
@Analytics: {
  dataExtraction: {
        enabled: true
  }
}

define view I_OptionSettlementTypeText
  as select from dd07t as DomainText
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: 'OptionSettlementTypeName'
  key cast(DomainText.domvalue_l as option_settlement_type)                    as OptionSettlementType,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key DomainText.ddlanguage                                                    as Language,

      @Semantics.text: true
      cast(DomainText.ddtext as  option_settlement_type_name preserving type ) as OptionSettlementTypeName,

      _Language
}
where
      DomainText.domname  = 'T_SETTLFL'
  and DomainText.as4local = 'A'
```
