---
name: I_AE_CNSMPNTAXCTRLCODETXT
description: "AE Cnsmpntaxctrlcodetxt"
app_component: FI-LOC-LO-AE
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - tax
  - component:FI-LOC-LO-AE
  - lob:Finance
---
# I_AE_CNSMPNTAXCTRLCODETXT

**AE Cnsmpntaxctrlcodetxt**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-AE` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `CountryCode` | ✓ | |  | `land1` |  |  |
| `ConsumptionTaxCtrlCode` | ✓ | |  | `steuc` |  |  |
| `ConsumptionTaxCtrlCodeText1` |  | |  | `text1` |  |  |
| `ConsumptionTaxCtrlCodeText2` |  | |  | `text2` |  |  |
| `ConsumptionTaxCtrlCodeText3` |  | |  | `text3` |  |  |
| `ConsumptionTaxCtrlCodeText4` |  | |  | `text4` |  |  |
| `ConsumptionTaxCtrlCodeText5` |  | |  | `text5` |  |  |
| `_Country` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_ControlCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_Language` | `I_Language` | [0..1] |
| `_ControlCode` | `I_AE_CnsmpnTaxCtrlCode` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IAECTRLCDTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Consumption Tax Control Code - Text'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {

  dataCategory: #TEXT,

  usageType: {
    dataClass: #MIXED,
    serviceQuality: #C,
    sizeCategory: #L
    }
 }
 
@ObjectModel.representativeKey: 'ConsumptionTaxCtrlCode'

@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT

@ObjectModel.supportedCapabilities:  [  #LANGUAGE_DEPENDENT_TEXT,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE                  ]

@ClientHandling.algorithm: #SESSION_VARIABLE  
@Metadata.ignorePropagatedAnnotations: true
                                                         
define view I_AE_CnsmpnTaxCtrlCodeTxt
  as select from t604n
  association [0..1] to I_Country              as _Country     on  $projection.CountryCode = _Country.Country
  association [0..1] to I_Language             as _Language    on  $projection.Language = _Language.Language
  association [0..1] to I_AE_CnsmpnTaxCtrlCode as _ControlCode on  $projection.CountryCode            = _ControlCode.CountryCode
                                                               and $projection.ConsumptionTaxCtrlCode = _ControlCode.ConsumptionTaxCtrlCode

{
       @Semantics.language: true
       @ObjectModel.foreignKey.association: '_Language'
  key  spras as Language,

       @ObjectModel.foreignKey.association: '_Country'
  key  land1 as CountryCode,

       @ObjectModel.foreignKey.association: '_ControlCode'
  key  steuc as ConsumptionTaxCtrlCode,

       @Semantics.text: true
       text1 as ConsumptionTaxCtrlCodeText1,

       @Semantics.text: true
       text2 as ConsumptionTaxCtrlCodeText2,

       @Semantics.text: true
       text3 as ConsumptionTaxCtrlCodeText3,

       @Semantics.text: true
       text4 as ConsumptionTaxCtrlCodeText4,

       @Semantics.text: true
       text5 as ConsumptionTaxCtrlCodeText5,

       _Language,

       _Country,

       _ControlCode //Make association public

}
```
