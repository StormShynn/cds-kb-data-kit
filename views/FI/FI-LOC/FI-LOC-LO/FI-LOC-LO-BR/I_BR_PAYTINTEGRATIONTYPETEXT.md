---
name: I_BR_PAYTINTEGRATIONTYPETEXT
description: BR Paytintegrationtypetext
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - text-view
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_PAYTINTEGRATIONTYPETEXT

**BR Paytintegrationtypetext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |
| `PaymentSystemIntegrationType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_tpintegra preserving type )` |
| `PaytSystemIntegrationTypeDesc` |  | |  | `cast ( substring ( ddtext, 1, 60 ) as logbr_tpintegradesc preserving type )` |
| `_BR_PaymentIntegrationType` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_PaymentIntegrationType` | `I_BR_PaymentIntegrationType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil Payment Integration Type - Text'
@AbapCatalog.compiler.compareFilter: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRTPINTEGRAT'
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'PaymentSystemIntegrationType'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations: true

define view I_BR_PaytIntegrationTypeText
  as select from dd07t
  association [1..1] to I_BR_PaymentIntegrationType as _BR_PaymentIntegrationType on $projection.PaymentSystemIntegrationType = _BR_PaymentIntegrationType.PaymentSystemIntegrationType
  association [0..1] to I_Language                  as _Language                  on $projection.Language = _Language.Language
{
      @Semantics.language: true
  key cast( ddlanguage as spras preserving type )                                 as Language,
      @ObjectModel.foreignKey.association: '_BR_PaymentIntegrationType'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_tpintegra preserving type )   as PaymentSystemIntegrationType,
      @Semantics.text: true
      cast ( substring ( ddtext, 1, 60 ) as logbr_tpintegradesc preserving type ) as PaytSystemIntegrationTypeDesc,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _BR_PaymentIntegrationType, //Comment this association in order to hide it if this association causes issues in analytical consumption
      _Language //Comment this association in order to hide it if this association causes issues in analytical consumption
}
where
      domname  = 'J_1BNFE_TPINTEGRA'
  and as4local = 'A'
```
