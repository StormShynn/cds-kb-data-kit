---
name: I_AE_CNSMPNTAXCTRLCODE
description: "AE Cnsmpntaxctrlcode"
app_component: FI-LOC-LO-AE
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_AE_CNSMPNTAXCTRLCODE

**AE Cnsmpntaxctrlcode**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-AE` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CountryCode` | ✓ | |  | `land1` |  |  |
| `ConsumptionTaxCtrlCode` | ✓ | |  | `steuc` |  |  |
| `_Country` | | ✓ | | | | |
| `_ControlCodeText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Country` | `I_Country` | [0..1] |
| `_ControlCodeText` | `I_AE_CnsmpnTaxCtrlCodeTxt` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IAECTRLCODE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Consumption Tax Control Code'

@ObjectModel: {

  usageType: {
    dataClass: #MIXED,
    serviceQuality: #C,
    sizeCategory: #L
    
    }
 }

@ObjectModel.representativeKey: 'ConsumptionTaxCtrlCode'
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #ANALYTICAL_DIMENSION               ]
                                        
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true


define view I_AE_CnsmpnTaxCtrlCode
  as select from t604f
  association [0..1] to I_Country                 as _Country         on  $projection.CountryCode = _Country.Country
  association [0..*] to I_AE_CnsmpnTaxCtrlCodeTxt as _ControlCodeText on  $projection.CountryCode            = _ControlCodeText.CountryCode
                                                                      and $projection.ConsumptionTaxCtrlCode = _ControlCodeText.ConsumptionTaxCtrlCode

{
        @ObjectModel.foreignKey.association: '_Country'
  key   land1 as CountryCode,

        @ObjectModel.text.association: '_ControlCodeText'
  key   steuc as ConsumptionTaxCtrlCode,

        _Country, //Make association public

        _ControlCodeText //Make association public

}
```
