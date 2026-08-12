---
name: I_SALESPRICINGCONDITIONFIELD
description: "SALESPricing ConditionFIELD"
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - pricing
  - pricing-condition
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
  - bo:PricingCondition
---
# I_SALESPRICINGCONDITIONFIELD

**SALESPricing ConditionFIELD**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionUsage` | ✓ | |  | `kvewe` |  |  |
| `ConditionApplication` | ✓ | |  | `kappl` |  |  |
| `PricingConditionField` | ✓ | |  | `kfdna` |  |  |
| `PrcgConditionGlobalFieldName` |  | |  | `fieldname_raw` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SlsPricingConditionFieldText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNDNFIELD'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@EndUserText.label: 'Sales Pricing Field Catalog'
define view I_SalesPricingConditionField
  as select from           t681f
    left outer to one join wlf_mp_fields on  t681f.kfdna                = wlf_mp_fields.int_fieldname
                                         and wlf_mp_fields.bor_obj      = 'BUS30110'
                                         and wlf_mp_fields.map_data_cat = 'B'
    left outer to one join dd03nd        on  wlf_mp_fields.ext_fieldname = dd03nd.fieldname
                                         and dd03nd.nodename             = '.NODE1'
                                         and dd03nd.as4local             = 'A'
                                         and dd03nd.strucobjn            = 'A_SLSPRCGCNDNRECDVALIDITY'
  association [0..*] to I_SlsPricingConditionFieldText as _Text on  $projection.ConditionUsage       = _Text.ConditionUsage
                                                                and $projection.ConditionApplication = _Text.ConditionApplication
                                                                and $projection.PricingConditionField       = _Text.PricingConditionField

{
  key t681f.kvewe          as ConditionUsage,
  key t681f.kappl          as ConditionApplication,
  @ObjectModel.text.association: '_Text'
  key t681f.kfdna          as PricingConditionField,
      dd03nd.fieldname_raw as PrcgConditionGlobalFieldName,
      _Text
}
where
      t681f.kvewe = 'A'
  and t681f.kappl = 'V'
  and t681f.kfgrp = '001'
```
