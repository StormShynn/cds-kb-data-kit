---
name: C_RECRRGSUPLRINVCTMPLWHGDTAX
description: "Recrrgsuplrinvctmplwhgdtax"
app_component: FI-FIO-AP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - consumption-view
  - tax
  - component:FI-FIO-AP-2CL
  - lob:Finance
---
# C_RECRRGSUPLRINVCTMPLWHGDTAX

**Recrrgsuplrinvctmplwhgdtax**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RecrrgSuplrInvcTmplWhgdTaxUUID` | ✓ | | `_Withtax` | `RecrrgSuplrInvcTmplWhgdTaxUUID` |  |  |
| `RecrrgSuplrInvcTmplUUID` |  | | `_Withtax` | `RecrrgSuplrInvcTmplUUID` |  |  |
| `WithholdingTaxAmount` |  | | `_Withtax` | `WithholdingTaxAmount` |  |  |
| `WithholdingTaxBaseAmount` |  | | `_Withtax` | `WithholdingTaxBaseAmount` |  |  |
| `WithholdingTaxCode` |  | | `_Withtax` | `WithholdingTaxCode` |  |  |
| `WithholdingTaxType` |  | | `_Withtax` | `WithholdingTaxType` |  |  |
| `TransactionCurrency` |  | | `_Withtax` | `TransactionCurrency` |  |  |
| `_Tmpl` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Tmpl` | `C_RecrrgSuplrInvcTmpl` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Whgd Tax in Recurring Suplr Invc Tmpl'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #L,
  dataClass: #MIXED
}
@ObjectModel.supportedCapabilities:[#EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.sapObjectNodeType.name:'RecrrgSuplrInvcTmplWhgdTx'
@VDM.viewType: #CONSUMPTION
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@Analytics:{
  dataExtraction: {
    enabled: true
  }
}

define view entity C_RecrrgSuplrInvcTmplWhgdTax 
  as select from I_RecrrgSuplrInvcTmplWhgdTax as _Withtax

  association [1..1] to C_RecrrgSuplrInvcTmpl as _Tmpl on $projection.RecrrgSuplrInvcTmplUUID = _Tmpl.RecrrgSuplrInvcTmplUUID
{
    
  key _Withtax.RecrrgSuplrInvcTmplWhgdTaxUUID as RecrrgSuplrInvcTmplWhgdTaxUUID,    

      _Withtax.RecrrgSuplrInvcTmplUUID        as RecrrgSuplrInvcTmplUUID,           

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      _Withtax.WithholdingTaxAmount           as WithholdingTaxAmount,              

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      _Withtax.WithholdingTaxBaseAmount       as WithholdingTaxBaseAmount,          

      _Withtax.WithholdingTaxCode             as WithholdingTaxCode,                

      _Withtax.WithholdingTaxType             as WithholdingTaxType,                

      _Withtax.TransactionCurrency            as TransactionCurrency,                

      _Tmpl
}
```
