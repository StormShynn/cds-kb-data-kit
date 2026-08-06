---
name: I_CUSTOMERCREDITGROUPTEXT
description: Customercreditgrouptext
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CR
  - interface-view
  - text-view
  - customer
  - text
  - credit
  - component:FIN-FSCM-CR-2CL
  - lob:Other
  - bo:Customer
---
# I_CUSTOMERCREDITGROUPTEXT

**Customercreditgrouptext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CreditAccountGroup` | `cred_group` |
| key `Language` | `langu` |
| `CreditAccountGroupName` | `cred_group_txt` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Customer Credit Group - Text'
@Analytics: { dataExtraction.enabled: true }
@AbapCatalog.sqlViewName: 'ICUSTCRDTGRPTXT'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CreditAccountGroup'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_CustomerCreditGroupText
  as select from ukm_cust_grp0t
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key cred_group     as CreditAccountGroup,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key langu          as Language,

      @Semantics.text: true
      cred_group_txt as CreditAccountGroupName,
      _Language
};
```
