---
name: I_TAXCONDITIONTYPE
description: "Taxconditiontype"
app_component: SD-MD-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-CM
  - interface-view
  - pricing-condition
  - tax
  - component:SD-MD-CM-2CL
  - lob:Sales & Distribution
---
# I_TAXCONDITIONTYPE

**Taxconditiontype**

| Property | Value |
|---|---|
| App Component | `SD-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConditionApplication` | ✓ | | `_PricingConditionType` | `ConditionApplication` |  |  |
| `ConditionType` | ✓ | | `_PricingConditionType` | `ConditionType` |  |  |
| `ConditionClass` |  | | `_PricingConditionType` | `ConditionClass` |  |  |
| `TaxConditionTypeOID` |  | |  | `case when _MdiOidConfiguration.Context is initial or _MdiOidConfiguration.ComposeOid is initial then cast( concat( concat(_PricingConditionType.ConditionApplication, '-'), _PricingConditionType.ConditionType ) as tax_condition_type_oid ) when _MdiOidConfiguration.Context is not initial then cast( concat( concat( concat( concat(_MdiOidConfiguration.Context, ':' ), _PricingConditionType.ConditionApplication), '-' ), _PricingConditionType.ConditionType ) as tax_condition_type_oid ) end` |  |  |
| `_ConditionApplication` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConditionApplication` | `I_ConditionApplication` | [0..1] |
| `_Text` | `I_TaxConditionTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICNTAXTYPE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.usageType.serviceQuality: #X
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.representativeKey: 'ConditionType'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Condition Type for Tax on Sales and Purchase'

@ObjectModel.sapObjectNodeType.name:'TaxConditionType'
@ObjectModel.objectIdentifier.oidElement:'TaxConditionTypeOID'
@ObjectModel.alternativeKey: [{ id: 'OID', uniqueness: #UNIQUE, element: ['TaxConditionTypeOID'] }]

define view I_TaxConditionType
  as select from           I_PricingConditionType as _PricingConditionType
    left outer to one join I_MdiOidConfiguration  as _MdiOidConfiguration on _MdiOidConfiguration.ObjectTypeCode = '5819' //DRF id
    //left outer to one join mdi_oid_config as _MdiOidConfiguration on _MdiOidConfiguration.object_type_code = '5819'
  association [0..1] to I_ConditionApplication as _ConditionApplication on  $projection.ConditionApplication = _ConditionApplication.ConditionApplication
  association [0..*] to I_TaxConditionTypeText as _Text                 on  $projection.ConditionApplication = _Text.ConditionApplication
                                                                        and $projection.ConditionType        = _Text.ConditionType
{
      @ObjectModel.foreignKey.association: '_ConditionApplication'
  key _PricingConditionType.ConditionApplication,
      @ObjectModel.text.association: '_Text'
  key _PricingConditionType.ConditionType,
      _PricingConditionType.ConditionClass,

      @ObjectModel.filter.enabled:false
      @ObjectModel.sort.enabled:false
      case when _MdiOidConfiguration.Context is initial
              or _MdiOidConfiguration.ComposeOid is initial then
            cast( concat( concat(_PricingConditionType.ConditionApplication, '-'), _PricingConditionType.ConditionType ) as tax_condition_type_oid )
           when _MdiOidConfiguration.Context is not initial then
            cast( concat( concat( concat( concat(_MdiOidConfiguration.Context, ':' ), _PricingConditionType.ConditionApplication), '-' ), _PricingConditionType.ConditionType ) as tax_condition_type_oid )
      //else
      // cast( concat( concat(_PricingConditionType.ConditionApplication, ':'), _PricingConditionType.ConditionType ) as tax_condition_type_oid )
       end as TaxConditionTypeOID,
      _ConditionApplication,
      _Text
}
where
  (
       _PricingConditionType.ConditionApplication = 'M'
    or _PricingConditionType.ConditionApplication = 'V'
  )
  and(
       _PricingConditionType.ConditionClass       = 'D'
    or _PricingConditionType.ConditionClass       = 'W'
    or _PricingConditionType.ConditionClass       = 'G'
  )
```
