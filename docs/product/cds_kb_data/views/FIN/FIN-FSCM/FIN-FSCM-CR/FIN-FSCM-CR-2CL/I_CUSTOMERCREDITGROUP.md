---
name: I_CUSTOMERCREDITGROUP
description: "Customercreditgroup"
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CR
  - interface-view
  - customer
  - credit
  - component:FIN-FSCM-CR-2CL
  - lob:Other
  - bo:Customer
---
# I_CUSTOMERCREDITGROUP

**Customercreditgroup**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditAccountGroup` | ✓ | |  | `cred_group` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CustomerCreditGroupText` | [0..*] |

## Source Code

```abap
//@API.elementState: #DEPRECATED
@VDM.lifecycle.status: #DEPRECATED
@VDM.lifecycle.successor: 'I_CRDTMBUSPARTNERGROUP'

@EndUserText.label: 'Customer Credit Group'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@AbapCatalog.sqlViewName: 'ICUSTCRDTGRP'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@VDM.viewType: #BASIC
//@VDM.private: false
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.internalName:#LOCAL
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'CreditAccountGroup'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #ANALYTICAL_DIMENSION,
                                     #EXTRACTION_DATA_SOURCE ]
define view I_CustomerCreditGroup
  as select from ukm_cust_grp
  association [0..*] to I_CustomerCreditGroupText as _Text on $projection.CreditAccountGroup = _Text.CreditAccountGroup
{
      @ObjectModel.text.association: '_Text'
  key cred_group       as CreditAccountGroup,
      _Text
};
```
