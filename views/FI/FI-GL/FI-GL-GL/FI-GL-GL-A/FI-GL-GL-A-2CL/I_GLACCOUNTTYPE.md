---
name: I_GLACCOUNTTYPE
description: GL AccountTYPE
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - gl-account
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_GLACCOUNTTYPE

**GL AccountTYPE**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `GLAccountType` | ✓ | |  | `cast(domvalue_l as glaccount_type)` |
| `DomainValue` |  | |  | `domvalue_l` |
| `_GLAccountTypeText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_GLAccountTypeText` | `I_GLAccountTypeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IGLACCTYPE'
@EndUserText.label: 'General Ledger Account Type'
@Analytics: { 
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true
}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.buffering.status: #NOT_ALLOWED
@ObjectModel: {representativeKey: 'GLAccountType', 
               dataCategory: #VALUE_HELP,
               sapObjectNodeType.name: 'GeneralLedgerAccountType', 
               modelingPattern: #ANALYTICAL_DIMENSION,
               supportedCapabilities:[#CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #VALUE_HELP_PROVIDER,#EXTRACTION_DATA_SOURCE ],
               usageType: {
                            dataClass: #MASTER,
                            serviceQuality: #B,
                            sizeCategory: #M
                           },
               resultSet.sizeCategory: #XS
              } 

@Search.searchable: true
@Consumption.ranked: true
define view I_GLAccountType
  as select from dd07l
  association [0..*] to I_GLAccountTypeText as _GLAccountTypeText on $projection.GLAccountType = _GLAccountTypeText.GLAccountType
{
      @ObjectModel.text.association: '_GLAccountTypeText'
  key cast(domvalue_l as glaccount_type) as GLAccountType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l as DomainValue,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _GLAccountTypeText
      
}
where
      domname  = 'GLACCOUNT_TYPE'
  and as4local = 'A'
```
