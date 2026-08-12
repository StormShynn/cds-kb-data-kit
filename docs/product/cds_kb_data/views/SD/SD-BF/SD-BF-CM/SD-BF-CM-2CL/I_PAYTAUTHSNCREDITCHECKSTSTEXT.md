---
name: I_PAYTAUTHSNCREDITCHECKSTSTEXT
description: "Paytauthsncreditcheckststext"
app_component: SD-BF-CM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-CM
  - interface-view
  - text-view
  - text
  - credit
  - component:SD-BF-CM-2CL
  - lob:Sales & Distribution
---
# I_PAYTAUTHSNCREDITCHECKSTSTEXT

**Paytauthsncreditcheckststext**

| Property | Value |
|---|---|
| App Component | `SD-BF-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PaytAuthsnCreditCheckSts` | ✓ | |  | `statu` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `PaytAuthsnCreditCheckStsDesc` |  | |  | `cast(bezei as paytauthsncreditcheckstsdesc )` |  |  |
| `_PaytAuthsnCreditCheckSts` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PaytAuthsnCreditCheckSts` | `I_PaytAuthsnCreditCheckSts` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'PaytAuthsnCreditCheckSts'
@ObjectModel.usageType.dataClass: #META 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S 
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@EndUserText.label: 'Credit Check Status for Payment Authorization - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDPAYACRDCKSTST'
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations:true

define view I_PaytAuthsnCreditCheckStsText  
as select from tvbst
 
association[0..1] to I_PaytAuthsnCreditCheckSts as _PaytAuthsnCreditCheckSts on $projection.PaytAuthsnCreditCheckSts = _PaytAuthsnCreditCheckSts.PaytAuthsnCreditCheckSts
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.sapObjectNodeTypeReference: 'PaymentAuthznCreditCheckStatus'
    @ObjectModel.foreignKey.association: '_PaytAuthsnCreditCheckSts'
    key statu as PaytAuthsnCreditCheckSts,
    
    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    
    @Semantics.text: true
    cast(bezei as paytauthsncreditcheckstsdesc ) as PaytAuthsnCreditCheckStsDesc,
     
    //Associations
    _PaytAuthsnCreditCheckSts,
    _Language        
}
where (tvbst.tbnam = 'VBAK') and (tvbst.fdnam = 'CMPSK');
```
