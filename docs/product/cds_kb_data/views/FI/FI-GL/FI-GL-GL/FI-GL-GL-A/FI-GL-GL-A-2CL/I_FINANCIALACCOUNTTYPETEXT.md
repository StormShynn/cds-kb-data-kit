---
name: I_FINANCIALACCOUNTTYPETEXT
description: "Financialaccounttypetext"
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - text-view
  - text
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_FINANCIALACCOUNTTYPETEXT

**Financialaccounttypetext**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialAccountType` | ✓ | |  | `cast( substring( domvalue_l, 1, 1) as farp_koart )` |  |  |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` |  |  |
| `FinancialAccountTypeName` |  | |  | `cast(ddtext as fis_fin_acc_type_name)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @EndUserText.label: 'Financial Account Type - Text'
@VDM.viewType: #BASIC
@Analytics: { dataExtraction.enabled: true }

@ObjectModel: { usageType.sizeCategory: #M,
                usageType.dataClass:  #MASTER,
                usageType.serviceQuality: #A,
                dataCategory: #TEXT,
                representativeKey: 'FinancialAccountType',
                supportedCapabilities: [#EXTRACTION_DATA_SOURCE, #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT }                   
@Metadata.ignorePropagatedAnnotations: true  
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true

define view entity I_FinancialAccountTypeText as select from dd07t
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{

  key cast( substring( domvalue_l, 1, 1) as farp_koart ) as FinancialAccountType,

  @ObjectModel.foreignKey.association: '_Language'
  @Semantics.language: true
  key cast( ddlanguage as spras ) as Language,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
  cast(ddtext as fis_fin_acc_type_name) as FinancialAccountTypeName,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l as DomainValue,
    _Language

}
where domname = 'FARP_KOART' and as4local = 'A';
```
