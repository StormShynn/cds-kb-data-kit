---
name: I_AE_CNSMPNTAXCTRLCODE
description: "AE Cnsmpntaxctrlcode"
semantic_vi: "View AE Cnsmpntaxctrlcode hiển thị mã điều khiển thuế tiêu thụ cho các quốc gia, được sử dụng để xác định tỷ lệ và quy định thuế cho các giao dịch tài chính. Nó được sử dụng trong thành phần FI-LOC-LO-AE cho các tính toán và báo cáo thuế."
keywords:
  - "consumption tax"
  - "tax control code"
  - "country code"
  - "financial transaction"
  - "tax rate"
  - "tax regulation"
  - "fi-loc-lo-ae"
  - "lob:finance"
  - "component:fi-loc-lo-ae"
  - "tax calculation"
  - "tax reporting"
semantic_en: "The AE Cnsmpntaxctrlcode view exposes consumption tax control codes for countries, which are used to determine tax rates and regulations for financial transactions. It is used in the FI-LOC-LO-AE component for tax-related calculations and reporting."
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
# I_AE_CNSMPNTAXCTRLCODE

**AE Cnsmpntaxctrlcode**

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
