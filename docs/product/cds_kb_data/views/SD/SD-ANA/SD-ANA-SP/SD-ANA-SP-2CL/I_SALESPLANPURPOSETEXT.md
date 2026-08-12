---
name: I_SALESPLANPURPOSETEXT
description: "Salesplanpurposetext"
app_component: SD-ANA-SP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-ANA
  - SD-ANA-SP
  - interface-view
  - text-view
  - text
  - component:SD-ANA-SP-2CL
  - lob:Sales & Distribution
---
# I_SALESPLANPURPOSETEXT

**Salesplanpurposetext**

| Property | Value |
|---|---|
| App Component | `SD-ANA-SP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesPlanPurpose` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as sales_plan_purpose )` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `SalesPlanPurposeDesc` |  | |  | `cast( ddtext as sp_purpose_text )` |  |  |
| `_Language` | | ✓ | | | | |
| `_SalesPlanPurpose` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_SalesPlanPurpose` | `I_SalesPlanPurpose` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Sales Plan Purpose - Text' 
@ObjectModel.representativeKey: 'SalesPlanPurpose'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSLSPLANPRPST'

@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #MASTER
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.modelingPattern:#LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #SEARCHABLE_ENTITY]
define view I_SalesPlanPurposeText
  as select from dd07t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [1..1] to I_SalesPlanPurpose as _SalesPlanPurpose on $projection.SalesPlanPurpose = _SalesPlanPurpose.SalesPlanPurpose
{
      @ObjectModel.foreignKey.association: '_SalesPlanPurpose'
  key cast ( substring( domvalue_l, 1, 1 ) as sales_plan_purpose ) as SalesPlanPurpose,
      @Semantics.language
  key ddlanguage                                                         as Language,
      @Semantics.text
      cast( ddtext as sp_purpose_text ) as SalesPlanPurposeDesc,
      
      //Association
      _SalesPlanPurpose,
      _Language
}
where
      domname  = 'SALES_PLAN_PURPOSE'
  and as4local = 'A'
```
